import { supabase } from '@/services/supabase'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'

export const useAuthStore = defineStore('auth', () => {
  //* States:
  const user = ref(JSON.parse(localStorage.getItem('currentUser') || null))
  const inputEmail = ref('')
  const inputPassword = ref('')
  const inputUserName = ref('')
  const inputPasswordRepeat = ref('')

  const toastOptions = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    theme: 'colored',
    hideProgressBar: false,
  }

  //*Actions:

  // Change User state and save in loclaStorage
  function setUser(newUser) {
    user.value = newUser
    if (newUser) {
      localStorage.setItem('currentUser', JSON.stringify(newUser))
    } else {
      localStorage.removeItem('currentUser')
    }
  }

  // Get User data from database
  async function getUser() {
    const { data, error } = await supabase.auth.getUser()
    if (error) {
      setUser(null)
      toast('Error In Getting User Data', {
        type: 'error',
        ...toastOptions,
      })
    } else {
      setUser(data.user)
    }
  }

  // SignUp
  async function signUp() {
    const email = inputEmail.value
    const password = inputPassword.value
    if (password !== inputPasswordRepeat.value) {
      toast('Repeat Password Not Match!', {
        type: 'error',
        ...toastOptions,
      })
      return false
    }
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) {
      console.log(error)
      toast('Invalid', {
        type: 'error',
        ...toastOptions,
      })
      return false
    } else {
      setUser(data.user)
      toast('Sign Up Successfylly', {
        type: 'success',
        ...toastOptions,
      })
      return data
    }
  }

  // SignIn
  async function signIn() {
    const email = inputEmail.value
    const password = inputPassword.value
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      console.log(error)
      toast('Invalid', {
        type: 'error',
        ...toastOptions,
      })
      return false
    } else {
      setUser(data.user)
      toast('Sign In Successfylly', {
        type: 'success',
        ...toastOptions,
      })
      return data
    }
  }

  // SignOut
  async function signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.log(error)
      toast('Error in Sign out', {
        type: 'error',
        ...toastOptions,
      })
    } else {
      setUser(null)
    }
  }

  // Get Data From component
  async function sendDatas(type) {
    if (type == 'signUp') {
      await signUp()
    } else if (type == 'signIn') {
      await signIn()
    } else if (type == 'signOut') {
      await signOut()
    }
  }

  //* return states and actions

  return {
    user,
    inputEmail,
    inputPassword,
    inputUserName,
    inputPasswordRepeat,
    setUser,
    getUser,
    signUp,
    signIn,
    signOut,
    sendDatas,
  }
})
