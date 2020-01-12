const express = require('express');
const router = express.Router();
const multer = require('multer');
const checkVerfiToken = require("../middleware/tokens/CheckVerifyToken");
const Tesaract = require("./../middleware/tesaract/Tesaract");
const Add = require("./../database/Add");


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/",upload.single('image'),checkVerfiToken,async (req,res,next) =>{
  const tesaract = new Tesaract();
  const result = await tesaract.read(req.file.buffer);
  if(result){
    const Image = {
      image:req.file.buffer,
      text:result
    };
    const add = new Add();
    addImageResult = await add.image(Image);
    if(addImageResult){
      return res.json({"Status":"success","TextResult":result});
    }else{
      return res.json({"Status":"error","StatusDetails":"fail"});
    }
  }else{
    return res.json({"Status":"error","StatusDetails":"fail"});
  }
});

module.exports = router;