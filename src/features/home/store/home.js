import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHomeStore = defineStore('home', () => {
  const query = ref('')

  
  

  function logSearch() {
    console.log(query.value)
  }

  return { query, logSearch }
})
