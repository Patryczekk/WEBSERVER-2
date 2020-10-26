const mongoose = require('mongoose');
const ejs = require('ejs');
const app = express()
const port = 3000
const clientDir = __dirname + "\\labbPostRequest\\"

mongoose.connect('mongodb://localhost/MSG', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

});

const msgSchema = new mongoose.Schema({
    email: String,
    message: String,
})

app.get('/', (req, res) => {
    res.render("pages/msg.ejs")
})

