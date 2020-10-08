const express = require('express')
const ejs = require('ejs')
const databaseModule = require("./databaseModule")
const personModule = require("./personModule")
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



app.listen(port, () => console.log(`Example app listening on port port!`))


