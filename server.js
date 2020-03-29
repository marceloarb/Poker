const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}));
const mongoose = require('./server/config/mongo.js');
app.use(express.json());
app.use(express.static( __dirname + '/public/dist/public' ));
const flash = require('express-flash');
const session = require('express-session');
app.set('trust proxy', 1)
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(flash());
require('./server/config/router.js')(app);
const path = require('path');
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});
app.listen(8000, () => console.log("listening on port 8000"));