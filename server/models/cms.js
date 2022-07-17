const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cmsSchema = new Schema({
  me: {
    type: Object,
    required: true
  },
  VideoList: {
    type: Array,
    required: true 
  },
  LinksList: {
    type: Array,
    required: true
  }
}, {timestamps: true});  

const Cms = mongoose.model('cms', cmsSchema) 

module.exports = Cms;

