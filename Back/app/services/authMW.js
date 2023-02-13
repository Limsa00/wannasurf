let authorized = true;

const userMW = (req,res,next) =>{
    if(authorized) {
        next()
    } else{
        res.status(403).send('Unauthorized!')
        return
    }
}

module.exports = userMW;