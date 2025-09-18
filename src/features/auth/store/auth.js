import { supabase } from '@/services/supabase'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'

export const useAuthStore = defineStore('auth', () => {
  //* States:

  const user = ref(JSON.parse(localStorage.getItem('currentUser') || null))
  const error = ref('')
  const inputEmail = ref('')
  const inputPassword = ref('')

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
    const { data, error: err } = await supabase.auth.getUser()
    err.value = ''
    if (err) {
      setUser(null)
      toast('Error In Getting User Data', {
        type: 'error',
        ...toastOptions,
      })
      error.value = err
    } else {
      setUser(data.user)
    }
  }

  // SignUp
  async function signUp() {
    const email = inputEmail.value
    const password = inputPassword.value
    error.value = ''
    const { data, error: err } = await supabase.auth.signUp({ email, password })
    if (err) {
      error.value = err
      console.log(err)
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
    error.value = ''
    const { data, error: err } = await supabase.auth.signInWithPassword({ email, password })
    console.log(err)
    console.log(data)
    if (err) {
      error.value = err
      console.log(err)
      toast('Invalid', {
        type: 'error',
        ...toastOptions,
      })
      console.log(err)
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
    const { error: err } = await supabase.auth.signOut()
    if (err) {
      console.log(err)
      toast('Error in Sign out', {
        type: 'error',
        ...toastOptions,
      })
      error.value = err
    } else {
      setUser(null)
    }
  }

  // Get Data From component
  async function sendDatas(type) {
    if (type == 'signUp') {
      await signUp()
      if (error.value.length !== 0) {
        console.log(error.value)
      }
    } else if (type == 'signIn') {
      await signIn()
      if (error.value.length !== 0) {
        console.log(error.value)
      }
    } else if (type == 'signOut') {
      await signOut()
      if (error.value.length !== 0) {
        console.log(error.value)
      }
    }
  }

  //* return states and actions

  return {
    user,
    error,
    inputEmail,
    inputPassword,
    setUser,
    getUser,
    signUp,
    signIn,
    signOut,
    sendDatas,
  }
})
