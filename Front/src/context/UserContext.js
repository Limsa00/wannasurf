import React, {useState, useEffect, createContext } from "react";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    updatePassword
} from "firebase/auth"
import {auth} from "../firebase.config"

export const UserContext = createContext();

export function UserContextProvider(props) {

    const signUp = (email, pwd) => createUserWithEmailAndPassword
        (auth, email, pwd)
    const signIn = (email, pwd) => signInWithEmailAndPassword
        (auth, email, pwd)
    const forgotPassword = (email) => sendPasswordResetEmail
        (auth, email, {
            url: 'http://localhost:3000/wannasurf/seconnecter',
        })
    const changePasswordFirebase = (user, newPassword) => updatePassword
        (user, newPassword)

    const [currentUser, setCurrentUser] = useState();
    const [loadingData, setLoadingData] = useState(true);

    useEffect(()=> {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser)
            setLoadingData(false)
        })
        return unsubscribe;
    }, [])

    // modals
    const [modalState, setModalState] = useState({
        signUpModal: true,
        signInModal: true
    });

    const toggleModals = modal => {
        if(modal === "signIn") {
            setModalState ({
                signUpModal: true,
                signInModal: false
            });
        }
        if(modal === "signUp") {
            setModalState ({
                signUpModal: true,
                signInModal: false
            });
        }
        if(modal === "close") {
            setModalState ({
                signUpModal: true,
                signInModal: true
            });
        }     
    }
    return (
        <UserContext.Provider value={{modalState, toggleModals, signUp, signIn, changePasswordFirebase, forgotPassword, currentUser}}>
            {!loadingData && props.children}
        </UserContext.Provider>
    );
};