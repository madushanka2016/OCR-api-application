const jwt = require('jsonwebtoken');
const sendJwt = (user) => {
    var token = jwt.sign({
        email:user.email,
        _id:user._id
    },
    "ocrSystem",
    {
        expiresIn:"1h"
    });
    return token;
}
module.exports = sendJwt;