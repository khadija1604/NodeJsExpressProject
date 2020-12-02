const mongoose = require('mongoose');
const schema = new mongoose.Schema({ name: 'string', subscription: 'boolean',tech: 'string' });
const Alien = mongoose.model('Alien', schema);
module.exports=Alien;