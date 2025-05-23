import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from './firebase.config';
import useAxiosPublic from '../hooks/useAxiosPublic';



export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic();


    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            if(currentUser){
                const userInfo = {email: currentUser?.email}
                    axiosPublic.post('/jwt',userInfo)
                    .then(res => {
                        if(res.data.token){
                            localStorage.setItem('access-token',res.data.token);
                        }
                    })
            }else{
               localStorage.removeItem('access-token')
            }
            console.log('current user ',currentUser);
            setLoading(false)
        })
        return () =>{
            return unSubscribe();
        }
    },[axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        googleLogin,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider