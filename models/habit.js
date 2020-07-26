const mongoose=require('mongoose');

const habitSchema= new mongoose.Schema({

     habitname:
     {
         type: String,
         required:true
     },
     time:
     {
         type:String,
         required:true
     },
     done:
     {
        type:Boolean,
     },
     not_done:
     {
        type:Boolean,
     },
     skipped:
     {
        type:Boolean,
        default:true
     },
     best:
     {
         type:Number,
         default:0
     },
     total:
     {
         type:Number,
         default:0
     },
     completed:
     {
         type:Number,
         default:0
     }

});

const Habit=mongoose.model('Habit', habitSchema);
module.exports=Habit;