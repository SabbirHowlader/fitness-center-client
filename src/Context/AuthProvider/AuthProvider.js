import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth)
    }


    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log("user observing")
            setUser(currentUser)
        });
        return () => unSubscribe
    }, [])
    const authInfo ={
        createUser,
        signIn,
        user,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}> 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;