const newUser = require('./../module/user');
const newImage = require('./../module/image');
class Add{
    async user(user){
        try{
            const newUserResult = await newUser({
                email:user.email,
                password:user.password,
            }).save();
            if(newUserResult){
                return newUserResult;
            }else{
                return null;
            }
        }catch(e){
            return null;
        }
    }
    async image(image){
        try{
            const newImageResult = await newImage({
                image:image.image,
                text:image.text,
            }).save();
            if(newImageResult){
                return newImageResult;
            }else{
                return null;
            }
        }catch(e){
            return null;
        }
    }
    
}
module.exports = Add;