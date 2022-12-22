import './siteContact.css'

export const SiteContact = () => {

    return (
    
        <div className="contact-bloc">
            <div className="title-contact">
                <h1>Une question, un commentaire ? Contactez-nous !</h1>
            </div>

            <form className="form-contact">
                <div className="form-champs">
                    <label htmlFor="name"> Votre nom </label>
                    <input 
                    type="texte" 
                    id="name" 
                    name="name" 
                    />
                </div>

                <div className="form-champs">
                    <label htmlFor="email"> Votre email </label>
                    <input 
                    type="mail" 
                    id="emailContact" 
                    name="emailContact" 
                    />
                </div>

                <div className="form-champs">
                    <label htmlFor="dateDepart"> Votre message </label>
                    <input 
                    type="placeholder" 
                    id="votreCommentaire" 
                    name="votreCommentaire" 
                    />
                </div>

                <button type="submit" className="btn-contact">Envoyez votre message</button>


            </form>

        </div>
        )
    }