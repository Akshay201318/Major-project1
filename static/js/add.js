
const {Habit,HabitList}=require('../../models/habit');

module.exports.list=async function()
{
     
      const habitlist= await HabitList.find();
    //   console.log('this is list :'+habitlist)
//     if(habitlist.length==0){
//          const HabitList=new HabitList();
//          habitlist=await HabitList.find();
//     }
    const habits = await  Habit.find();
   
     let day=[];

    //  let dayobj= new Habit({name:'', done:'', skipped:''});

    //  console.log("this is habits"+habits);

       for(let i in habits)
        {
            let dayobj = new Habit({habitname:habits[i].habitname, done:false, skipped:false});

            //  dayobj.name=habits[i].habitname;
            //  dayobj.done=false;
            //  dayobj.skipped=false;
             day.push(dayobj);
        }
        // console.log(day);


        // let obj = new HabitList({day:day});

        let obj1 = new HabitList({
            week:
            [
                {
                    day:day
            
                }
            ]
        })
    
        // console.log(obj);

    
       obj1.save((err, data) => {
           if(err){
               console.log(err);
           }
           else{
               console.log("successfull : "+data);
           }
       });
        
 }