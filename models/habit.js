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






const habitListSchema= new mongoose.Schema(
    {

    week:
    [
        {
            day:
            [
                {
                  habitname:
                          {
                             type: String,
                             required:true
                          },
                      done:
                          {
                             type:Boolean,
                             default:false
                          },
                   Skipped:
                         {
                
                           type:Boolean,
                           default:false
                         }
                }
            ]
    
        }
    ]
});

const Habit=mongoose.model('Habit', habitSchema);
const HabitList=mongoose.model('HabitList', habitListSchema);
module.exports={Habit,HabitList};
