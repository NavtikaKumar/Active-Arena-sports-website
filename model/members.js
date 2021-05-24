const mongoose = require("mongoose")

//schema for members
const memberSchema = mongoose.Schema({
    name:{
        type: String,
    },
    gender:{
        type: String,
    },
    dob:{
        type: String,
    },
    primeMob:{
        type: String,
    },
    secMob:{
        type: String,
    },
    email:{
        type: String,
    },
    address:{
        type: String,
    },
    father:{
        type: String,
    },
    mother:{
        type: String,
    },
    spouse:{
        type: String,
    },
    memType:{
        type: String,
    },
    facilities:{
        type: String,
    }
})


module.exports = mongoose.model('Member', memberSchema,'MembersData');
