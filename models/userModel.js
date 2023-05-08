const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  useremail: { type: String, required: true, unique: true },


  firstName: { type: String, default:'' },
  lastName: { type: String, default:''},
  email: { type: String, default:''},
  mobileNumber: { type: String, default:''},
  portfolio: { type: String, default:'' },
  address:{type:String, default:''},
  careerObjective: { type: String, default:'' },
  // now below we are going to get values in arrarys because we stored the datas in arrays 
  education: { type: Array, default:[]},
  skills: { type: Array, default:[]},
  experience: { type: Array, default:[]},
  projects: { type: Array, default:[]},


}, {
  timestamps: true
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel