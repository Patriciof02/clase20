const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
    },
    pass:{
        type:String,
        require: true,
    },
    mail:{
        type:String,
        require: true,
    },
    phone:{
        type: String,
        required:false
    },
    adress:{
        type: String,
        require: true,
    },
    dob:{
        type: String,
        require:false
    },

  

})

mongoose.model('User',UserSchema)
