const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/WEBWES2', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});


exports.storePerson = (name, email, age) => {
    var person = new Person({
        name: name, 
        email: email, 
        age: age 
       })
    
     person.save((result)=>{
       console.log(result)
     })
 }

 exports.storeElement = async (element) => {
   await element.save()
 }