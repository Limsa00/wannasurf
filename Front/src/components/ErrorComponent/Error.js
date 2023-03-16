import styles from "./error.module.css";
import ImgError from '../../images/img_mon_espace.jpg'

export const Error = () => {
    return (
        <div id={styles['error']}>
            <div className={styles['img-card-error']}>
                <img src={ImgError} className={styles['img-size-error']} alt="illustration du composant d'erreur du site" />
            </div>
            <div className={styles['title-error']}>
                <h1>Notre site est indisponible pour le moment, veuillez reessayer plus tard !</h1> 
            </div>
        </div>   

    )
}