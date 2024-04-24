import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../Utility/firebase/firebase.config';
export const AuthContext = createContext(null)

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)

    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const handleSignIn = (email, password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setloading(true)
        return signOut(auth)
    }


    const handlePasswordReset = (email) => {
        setloading(true)
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth, currentUser => {
            console.log("Current User is ", currentUser)
            setUser(currentUser)
            setloading(false)
        })

        return ()=> {unSubcribe()}
    },[])

    const authInfo = { user, loading, createUser, handleSignIn, logOut, handlePasswordReset }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;