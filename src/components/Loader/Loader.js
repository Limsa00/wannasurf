/**
 * Ce fichier définit le composant Loader.
 * Il affiche un élément de chargement animé avec le texte "WAITING...".
 * @module Loader
*/

import styles from "./loader.module.css";

/**
 * Composant Loader.
 * @returns {JSX.Element} Élément HTML représentant le Loader.
 */

export const Loader = () => {
    return (
        <div id="loader">
            <div className={styles['loader']}>
            <span className={styles['loader___animation']}>
            </span>
                <span className={styles['loader__lettre']}>W</span>
                <span className={styles['loader__lettre']}>A</span>
                <span className={styles['loader__lettre']}>I</span>
                <span className={styles['loader__lettre']}>T</span>
                <span className={styles['loader__lettre']}>I</span>
                <span className={styles['loader__lettre']}>N</span>
                <span className={styles['loader__lettre']}>G</span>
                <span className={styles['loader__lettre']}>.</span>
                <span className={styles['loader__lettre']}>.</span>
                <span className={styles['loader__lettre']}>.</span>
            </div>   
        </div>
    )
}