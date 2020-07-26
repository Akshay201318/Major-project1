const mongoose=require('mongoose');
const Schema=mongoose.Schema
const habitSchema=new Schema(
    {
        day:{
            type:String,
            required:true
        },
        week:[
            [
                {
                    habitname:{
                        type:'string',
                        required:true
                    },
                    done:{
                        type:'boolean',
                        required:true,
                        default:false
                    },
                    skipped:{
                        type:'boolean',
                        required:true,
                        default:false
                    }
                }
            ]
        ]
    }
)
const HabitModel=mongoose.model('weekHabit',habitSchema)
module.exports={HabitModel}