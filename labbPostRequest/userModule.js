const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  uName: String,
  uEmail: String,
  uPassword: String
});

const User = mongoose.model('User', userSchema);

exports.storeUser = (uName, uEmail, uPassword ) => {
    var user = new User({ 
        username: uName,
        email: uEmail, 
        password: uPassword
       })
    
      user.save((result)=>{
       console.log(result)
     })
 }



exports.getUser = async (uName) => {
  var user = await User.findOne({name: uName}) 
  return user 
}