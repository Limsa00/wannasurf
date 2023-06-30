/**
 * @file Fichier userContext.js
 * @description Fichier contenant le contexte utilisateur.
 */
import React, { useState, useEffect, createContext } from "react";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    updatePassword
} from "firebase/auth"
import {auth} from "../firebase.config"

/**
 * @typedef {Object} ModalState
 * @property {boolean} signUpModal - État du modal d'inscription.
 * @property {boolean} signInModal - État du modal de connexion.
 */

/**
 * @typedef {Object} UserContextValue
 * @property {ModalState} modalState - État des modals.
 * @property {function} toggleModals - Fonction pour basculer les modals.
 * @property {function} signUp - Fonction pour créer un compte utilisateur.
 * @property {function} signIn - Fonction pour se connecter avec un compte utilisateur.
 * @property {function} changePasswordFirebase - Fonction pour changer le mot de passe d'un utilisateur.
 * @property {function} forgotPassword - Fonction pour réinitialiser le mot de passe d'un utilisateur.
 * @property {Object} currentUser - Utilisateur actuellement connecté.
 */

export const UserContext = createContext();

/**
 * Composant du contexte utilisateur.
 * @param {Object} props - Propriétés passées au composant.
 * @returns {JSX.Element} Composant du contexte utilisateur.
 */
export function UserContextProvider(props) {

    /**
     * Fonction pour créer un compte utilisateur.
     * @param {string} email - Adresse e-mail de l'utilisateur.
     * @param {string} pwd - Mot de passe de l'utilisateur.
     * @returns {Promise} Promesse résolue une fois le compte utilisateur créé.
     */
    const signUp = (email, pwd) => createUserWithEmailAndPassword
        (auth, email, pwd)
    /**
     * Fonction pour se connecter avec un compte utilisateur.
     * @param {string} email - Adresse e-mail de l'utilisateur.
     * @param {string} pwd - Mot de passe de l'utilisateur.
     * @returns {Promise} Promesse résolue une fois la connexion établie.
     */
    const signIn = (email, pwd) => signInWithEmailAndPassword
        (auth, email, pwd)
        /**
         * Fonction pour réinitialiser le mot de passe d'un utilisateur.
         * @param {string} email - Adresse e-mail de l'utilisateur.
         * @returns {Promise} Promesse résolue une fois l'e-mail de réinitialisation envoyé.
         */
    const forgotPassword = (email) => sendPasswordResetEmail
        (auth, email, {
            url: process.env.REACT_APP_RESET_PASSWORD_URL,
        })
    /**
     * Fonction pour changer le mot de passe d'un utilisateur.
     * @param {Object} user - Utilisateur dont le mot de passe doit être modifié.
     * @param {string} newPassword - Nouveau mot de passe de l'utilisateur.
     * @returns {Promise} Promesse résolue une fois le mot de passe modifié.
     */
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

  /**
   * État des modals.
   * @type {ModalState}
   */
    const [modalState, setModalState] = useState({
        signUpModal: true,
        signInModal: true
    });

    
  /**
   * Fonction pour basculer les modals.
   * @param {string} modal - Nom du modal à basculer ("signIn", "signUp", "close").
   */
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