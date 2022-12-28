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

    doSinup: async ()=>{

    },
    
    logout: async ()=>{

    }
};

module.exports = loginController;