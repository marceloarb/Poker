const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/poker', {useNewUrlParser: true});
module.exports = mongoose;