const mongoose = require('mongoose');

exports.personSchema(name, email, age) => {
  const personSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
  })

  const Person = mongoose.model('Person', personSchema);
}

exports.saveUser => {
  app.post('/', (req, res) => {
    console.log(req.body.name)
    console.log(req.body.email)
  
    databaseModule.storePerson(req.body.name, req.body.email, req.body.age)
  
    res.render("pages/index.ejs", { name: "" + req.body.name })
  })
}
