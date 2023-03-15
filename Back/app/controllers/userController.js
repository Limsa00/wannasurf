const User = require('../models/User');

const userController = {

    findUserWithUid: async (req,res) => {
        console.log("----- userController request findUserWithUid starts ------");

        const user = await User.findByUid(req.params.uid);
       
        if (user) {
            res.json(user);
        } else {
            res.status(202).json(`utilisateur introuvable`);
        };
    },

    // A FINIR
    // showUserJourneys : async (req,res) => {
    //     console.log("----- userController request findUserWithUid starts ------");
    // },

    editUser: async (req,res) => {
        console.log("----- userController request editUser starts ------");

        const user = await User.findByUid(req.params.uid);

        if(user){
            const userToEdit = await new User(user);
            userToEdit.update(req.body);
            userToEdit.saveOrEditOneComponent();
            res.status(200).json('Utilisateur mis à jour')
        }else{
            res.status(202).json(`Impossible d'effectuer cette opération`);
        }        
    },

    showUserJourneyDetail : async (req,res) =>{
        console.log("----- Controller request showUserJourneyDetail -----");

        const id = req.params.id;
        
        const userJourneys = await User.findJourneyDetail(id);
        if(userJourneys) {
            res.json(userJourneys);
        } else {
            res.status(202).json(`pas de voyages trouvés pour cet utilisateur`);
        }
    }

    /*
    doLogin: async (req,res)=>{
        console.log("----- doLogin starts ------");

        const user = await User.findByEmail(req.body.email)
        if (!user) {
            res.status(202).json('utilisateur introuvable');
        } else {
            // const validPwd = bcrypt.compareSync(req.body.password, user.password);

            // if (!validPwd) {
            //     res.status(202).json('le mot de passe est incorrect');
            // } else {
                req.session.user = {
                    id: user.id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                }

                res.status(200).json({ logged: true, session: req.session.user });
            // }
        }
    },

    loginCheck: async (req,res)=>{
        console.log("----- loginCheck starts ------");

        if (req.session.user) {
            res.json({ logged: true, session: req.session.user });
        } else {
            res.json({ logged: false, session: {} });
        };
    },

    doSignup: async (req,res)=>{
        console.log("----- doSinup starts ------");

        const user = await User.findByEmail(req.body.email)
        if (user) {
            res.status(401).json('Cette adresse email est indisponible');
        } else {
            if (req.body.password !== req.body.password_confirm) {
                res.status(401).json('la confirmation du mot de passe est incorrecte');
            } else {
                // const hashPwd = bcrypt.hashSync(req.body.password, 10);

                const newUser = new User({
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    gender:req.body.gender,
                    phone:req.body.phone,
                    email: req.body.email,
                    city: req.body.city,
                    password: req.body.password,
                });

                const addedUserId = await newUser.saveOneUser();

                // Insère toutes les propriétés de newUser dans newUser2 sauf _id et password
                const {_id, password, ...newUser2} = newUser; 

                res.json({...addedUserId,...newUser2});
                // res.json('signup réussi');
            }
        }
    },
    
    doLogout: async (req,res)=>{
        console.log("----- doLogout starts ------");

        req.session.destroy();
        res.json('tu es maintenant déconnecté');
    },

    deleteOneUser: async (req,res)=>{
        console.log("----- Controller request deleteOneUser -----");

        const user= await User.findById(req.params.id);
        // console.log(user);
        if (user){
            const userToDelete = new User(user);
            // console.log(userToDelete);
            await userToDelete.delete();
            res.json("utilisateur supprimé")
        } else {
            res.status(404).json('utilisateur introuvable');
        }
    }
    */
};

module.exports = userController;