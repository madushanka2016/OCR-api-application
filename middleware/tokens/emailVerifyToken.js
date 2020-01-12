const jwt = require('jsonwebtoken');
const verifyToken = (user) => {
    var token = jwt.sign({
        email:user.email,
    },
    "ocrSystem",
    {
        expiresIn:"12h"
    });
    return token;
}
module.exports = verifyToken;