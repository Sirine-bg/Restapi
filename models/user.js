const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mail: {
     type: String, 
     unique: true },
 phone: {
     type: Number
     }

});


module.exports = user = mongoose.model('user', userSchema);
