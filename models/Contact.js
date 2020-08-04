var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
  name:{type:String, require:true, unique:true},
  email:{type:String},
  phone:{type:String}
});

var Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;
