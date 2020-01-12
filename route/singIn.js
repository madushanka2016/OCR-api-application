const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const JwtToken = require('./../middleware/tokens/sendJwt');
const FindUser = require("./../database/FindUser");

router.post('/' ,async (req , res) => {
    const findUser = new FindUser();
    const findUserResult = await findUser.byEmail(req.body.email);
    if(findUserResult){
        if(findUserResult.isVerified){
            const userPasswordValidater =await bcrypt.compare(req.body.password.toString() , findUserResult.password);
            if(userPasswordValidater){
                const jwtToken =JwtToken(findUserResult);
                return res.json({"Status":"success","StatusDetails":"login successful","token":jwtToken});
            }else{
                return res.json({"Status":"error","StatusDetails":"password does not match"});
            }
        }else{
            return res.json({"Status":"error","StatusDetails":"email not verified"});
        }
    }else{
        res.json({"Status":"error","StatusDetails":"this email not found"});
    }
});
module.exports = router;