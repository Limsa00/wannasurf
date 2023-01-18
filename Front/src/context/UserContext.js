import React, {useState, useEffect, createContext } from "react";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth"
import {auth} from "../firebase.config"

export const UserContext = createContext();

export function UserContextProvider (props) {

    const [currentUser, setCurrentUser] = useState();
    const [loadingData, setLoadingData] = useState(true);

    const signUp = (email,password) => createUserWithEmailAndPassword
    (auth, email, password)

    // modals
    const [modalState, setModalState] = useState({
        signUpModal: true,
        signInModal: false
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
                signUpModal: false,
                signInModal: false
            });
        }     
    }
    return (
        <UserContext.Provider value={{modalState, toggleModals, signUp}}>
            {props.children}
        </UserContext.Provider>
    );
};