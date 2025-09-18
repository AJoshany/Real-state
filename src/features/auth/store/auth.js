import { supabase } from '@/services/supabase';
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {

    //* States:

    const user = ref(JSON.parse(localStorage.getItem("currentUser") || null));
    const error = ref("")
    const inputEmail = ref('')
    const inputPassword = ref('')

    //*Actions:

    // Change User state and save in loclaStorage
    function setUser(newUser) {
        user.value = newUser;
        if (newUser) {
            localStorage.setItem("currentUser", JSON.stringify(newUser))
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
            error.value = err
        } else {
            setUser(data.user)
        }
    }

    // SignUp 
    async function signUp() {
        const email = inputEmail.value
        const password = inputEmail.value
        error.value = ""
        const { data, error: err } = await supabase.auth.signUp({ email, password })
        if (err) {

            error.value = err
            console.log(err)
            return false
        } else {
            setUser(data.user)
            alert("Sign Up Successfully")
            return data
        }
    }

    // SignIn
    async function signIn(email, password) {
        error.value = ""
        const { data, error: err } = await supabase.auth.signInWithPassword({ email, password })
        if (err) {
            error.value = err
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
            error.value = err
        } else {
            setUser(null)
        }
    }

    // Get Data From component
    async function sendDatas(type) {
        if (type == "signUp") {
            await signUp()
            if (error.value.length !== 0) {
                console.log(error.value)
            }
        } else if (type == "signIn") {
            await signIn()
            if (error.value.length !== 0) {
                console.log(error.value)
            }
        } else if (type == "signOut") {
            await signOut()
            if (error.value.length !== 0) {
                console.log(error.value)
            }
        }
    }

    //* return states and actions

    return { user, error, inputEmail, inputPassword, setUser, getUser, signUp, signIn, signOut, sendDatas }

})
