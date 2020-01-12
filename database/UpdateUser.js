const updateUser = require("./../module/user");
class UpdateUser{
    async byEmail(user) {
        const updateResult = await updateUser.updateOne({email : user.email},{$set:{isVerified:user.isVerified}});
        return updateResult;
    }
}
module.exports = UpdateUser;