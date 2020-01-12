const jwt = require('jsonwebtoken');

module.exports = (req , res , next) => {
    try{
        const decode = jwt.verify(req.body.token , "ocrSystem");
        next();
    }catch(e){
        return res.json({"Status":"error","StatusDetails":"Auth Failed","TokenDetails":e});
    }
}