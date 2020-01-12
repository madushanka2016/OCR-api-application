const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const user = require("../module/user");
const FindUser = require("../database/FindUser");
const UpdateUser = require("../database/UpdateUser");

router.get("/:token",async (req,res)=>{
    var decoded;
    try{
        decoded = jwt.verify(req.params.token, 'ocrSystem');
    }catch(e){
        return res.json({"Status":"error","StatusDetails":"Invalid token"});
    }
    const findUser = new FindUser();
    const findUserResult = await findUser.byEmail(decoded.email);
    if(findUserResult){
        const User = {
            email:decoded.email,
            isVerified:true
        }
        const updateUser = new UpdateUser();
        const updateResult = await updateUser.byEmail(User);
        if(updateResult){
            return res.json({"Status":"success","StatusDetails":"user verification success."});
        }else{
            return res.json({"Status":"error","StatusDetails":"fail"});
        }
    }else{
        return res.json({"Status":"error","StatusDetails":"fail"});
    }
});
module.exports = router;