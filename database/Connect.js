const mongoose = require('mongoose');
class Connect{
    async database(){
        try{
            mongoose.set('useNewUrlParser', true);
            mongoose.set('useUnifiedTopology', true);
            mongoose.connect("mongodb+srv://madushanka:Kahawa2016@cluster0-jgwmg.mongodb.net/test?retryWrites=true&w=majority");
            return true;
        }catch(e){
            return false;
        }
    }   
}
module.exports = Connect;