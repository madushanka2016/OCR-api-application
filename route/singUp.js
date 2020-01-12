const express = require('express');
const route = express.Router();
const bcrypt = require('bcryptjs');
const sendValidationEmail = require('../middleware/emailService/emailServise');
const FindUser = require("./../database/FindUser");
const Add = require("./../database/Add");
route.post('/',async (req,res,next) => {
    const findUser = new FindUser();
    const findUserResult = await findUser.byEmail(req.body.email);
    if(findUserResult){
        return res.json({"Status":"error","StatusDetails":"This email already exit"});
    }else{
        var salt = bcrypt.genSaltSync(10);
        var hashPassword = bcrypt.hashSync(req.body.password.toString(), salt);
        if(hashPassword){
            const User = {
                userName:req.body.userName,
                email:req.body.email,
                password:hashPassword
            };
            const add = new Add();
            const addUserResult = await add.user(User);
            if(addUserResult){
                next();
            }else{
                return res.json({"Status":"error","StatusDetails":"fail"});
            }
        }
    }
},sendValidationEmail);
module.exports = route;