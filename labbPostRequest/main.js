const express = require('express')
const ejs = require('ejs')
const databaseModule = require("./databaseModule")
const personModule = require("./personModule")
const userModule = require("./userModule")
const app = express()
const port = 3000
const clientDir = __dirname + "\\labbPostRequest\\"


app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(clientDir))

app.set('view-engine', 'ejs')


app.get('/', (req, res) => {
  res.render("pages/index.ejs", { name: "" })
})

app.get('/login', (req, res) => {
  res.render('pages/login.ejs')
})

app.get('/register', (req, res) => {
  res.render('pages/register.ejs')
})

app.post('/login', async (req, res) => {
  let user = await userModel.getUser(req.body.uName)

  if (user) {
    if (user.uPassword === req.body.uPassword) {
      res.send("SUCESS")
    } else {
      res.send("Incorrect password")
    }
  } else {
    res.send("User doesn not exist")
  }
})

app.post('/register', async  (req, res) =>{
  let user = userModule.newUser(req.body.uName, req.body.uEmail, req.body.uPassword)
  await databaseModule.storePerson(user)
  res.redirect('/login')
})

app.listen(port, () => console.log(`Example app listening on port port!`))


