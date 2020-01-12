const express = require('express');
const app = express();
var cors = require('cors');
const Connect = require('./database/Connect');
app.use(express.json({
	extended:true
}));
app.use(cors())

const connect = new Connect();
if(!connect.database()){
    console.log("Connection fail");
    return;
}else{
    console.log("Connect success");
}

const singUpRouter = require('./route/singUp');
const singInRouter = require('./route/singIn');
const imageRouter = require('./route/UploadImage');
const emaiVerify = require('./route/VerifyEmail');

app.use('/singUp' , singUpRouter);
app.use('/singIn' , singInRouter);
app.use('/image' , imageRouter);
app.use('/user/verify' , emaiVerify);
app.use((req,res) => {
    return res.json({"Status":"error","StatusDetails":"Request not found"});
});

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log("Ok");
});