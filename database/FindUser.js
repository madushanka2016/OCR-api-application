const user = require('./../module/user');
class FindUser {
    async byEmail(email){
        const newUser = await user.findOne({email:email});
        return newUser;
    }
}
module.exports = FindUser;