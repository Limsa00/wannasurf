import React, {useState, useEffect, createContext } from "react";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from "frebase/auth"
import {auth} from "../firebase.config"

export const UserContext = createContext();

export function UserContextProvider (props) {

    const [currentUser, setCurrentUser] = useState();
    const [loadingData, setLoadingData] = useState(true);

    const SignUp = (email,password) => createUserWithEmailAndPassword
    (auth, email, password)

    // modals
    const [modalState, setModalState] = useState({
        signUpModal: false,
        signInModal: false
    });

    const toggleModals = modal => {
        if(modal === "signIn") {
            setModalState ({
                signUpModal: false,
                signInModal: true
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
        <UserContext.Provider value={{modalState, toggleModals}}>
            {props.children}
        </UserContext.Provider>
    );
};