const jwt = require('jsonwebtoken');
const secret = "ajghoanw4hjgwiqg";

module.exports = {
    auth: (req,res,next)=>{
        const authHeader = req.headers["authorization"];
        if(!authHeader){
            return res.status(403).json({msg:"authHeader not present"});
       }
        const decoded = jwt.verify(authHeader,secret);
        if(decoded && decoded.id){
            req.userID = decoded.id
            next()
        }else{
            res.status(403).json({msg:"invalid token"})
        }
    }
}