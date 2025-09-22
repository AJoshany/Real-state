import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useAuthStore } from '../../auth/store/auth'
import { supabase } from '@/services/supabase'
import { useAppStore } from '../../../store/store'

export const useBookmarkStroe = defineStore('bookmark', () => {
  const userBookmarks = ref([])

  const authStore = useAuthStore()
  const appStore = useAppStore()

  async function loadBookmarks() {
    await authStore.getUser()
    if (!authStore.user) return false
    let { data } = await supabase
      .from('userBookmarks')
      .select('property_id')
      .eq('user_id', authStore.user.id)
    userBookmarks.value = new Set([...data.map((p) => p.property_id)])
    appStore.houses.forEach((house) => {
      house.isBookmarked = userBookmarks.value.has(String(house.id))
    })
  }

  async function toggleBookmark(house) {
    await authStore.getUser()
    if (!authStore.user) {
      alert('Please login first')
      return
    }

    if (house.isBookmarked) {
      await supabase
        .from('userBookmarks')
        .delete()
        .match({ user_id: authStore.user.id, property_id: house.id })
      house.isBookmarked = false
    } else {
      await supabase
        .from('userBookmarks')
        .insert([{ user_id: authStore.user.id, property_id: house.id }])
      house.isBookmarked = true
    }
  }

  return { userBookmarks, loadBookmarks, toggleBookmark }
})
