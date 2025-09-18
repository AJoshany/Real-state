import { supabase } from '@/services/supabase';
import { ref } from 'node:process'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
    //* States:

    const user = ref(JSON.parse(localStorage.getItem("currentUser") || null));
    const error = ref("")

    //*Actions:

    // Change User state and save in loclaStorage
    function setUser(newUser) {
        user.value = newUser;
        if (newUser) {
            localStorage.setItem("currentUser", JSON.stringify(user))
        } else {
            localStorage.removeItem("currentUser")
        }
    }

    // Get User data from database
    async function getUser() {
        const { data, error: err } = await supabase.auth.getUser();
        err.value = ""
        if (err) {
            setUser(null);
            error.value = err.massage
        } else {
            setUser(data.user)
        }
    }

    // SignUp 
    async function signUp(email, password) {
        error.value = ""
        const { data, error: err } = await supabase.auth.signUp({ email, password })
        if (err) {
            error.value = err.massage
            console.log(err)
            return false
        } else {
            setUser(data.user)
            return data
        }
    }

    // SignIn
    async function signIn(email, password) {
        error.value = ""
        const { data, error: err } = await supabase.auth.signInWithPassword({ email, password })
        if (err) {
            error.value = err.massage
            console.log(err)
            return false
        } else {
            setUser(data.user)
            return data
        }
    }

    // SignOut
    async function signOut() {
        const { data, error: err } = await supabase.auth.signOut()
        if (err) {
            console.log(err)
            error.value = err.massage
        } else {
            setUser(null)
        }
    }

    //*return states and actions

    return { user, error, setUser, getUser, signUp, signIn, signOut }
})
