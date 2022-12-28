const User = require('../models/User');

const loginController = {
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

    doSinup: async (req,res)=>{
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

                await newUser.saveOneUser();

                res.json('signup réussi');
            }
        }

    },
    
    logout: async ()=>{

    }
};

module.exports = loginController;