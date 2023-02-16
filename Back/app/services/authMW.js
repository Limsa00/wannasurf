var admin = require('firebase-admin');

// let authorized = true;

var serviceAccount = {
    credential: admin.credential.cert(require("./serviceAccount.json"))
  };
  admin.initializeApp(serviceAccount);

const authMW = (req,res,next) => {
    console.log('--Call to Auth MW--');

    var token;

    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') { 
        // Handle token presented as a Bearer token in the Authorization header
        token = req.headers.authorization.split(' ')[1];
    
        admin.auth().verifyIdToken(token)
        .then(function(decodedToken) {
          console.log("Decoded token:")
          console.log(decodedToken);
    
        //   if (callback) {
        //     callback(req, res);
        //   }
        next();  
        }).catch(function(error) {
          // Setup response
          console.log(error);
          res.status(401).send();
        });
      } else {
        // Setup response
        console.log('No bearer token');
        res.status(401).send();
    }

  
    /*
    if(authorized) {
        next()
    } else{
        res.status(403).send('Unauthorized!')
        return
    }
    */
}

module.exports = authMW;