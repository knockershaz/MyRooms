const mongoose  = require('mongoose')

const roomSchema = mongoose.Schema({
    name:{
        type: 'string',
        required: true
    },
    maxcount:{
        type:'number',
        required: true
    },
    phonenumber:{
        type:'number',
        required: true
        },
        rentperday:{
            type:'number',
            required: true
        },
        type:{
            type:'string',
            required:true
        },
        description:{
            type:'string',
            required:true
        },
        imageurl:[],
        currentbookings:[]
    },{
        timestamps:true,
})

const roomModel = mongoose.model('rooms',roomSchema)

module.exports = roomModel