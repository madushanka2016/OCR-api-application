const jwt = require('jsonwebtoken');
class JwtToken {
    create(key){
        var token = jwt.sign({
            email:searchResult.email,
            _id:searchResult._id
        },
        key,
        {
            expiresIn:"1h"
        });
        return token;
    }
}
module.exports = JwtToken;