const Habit=require('../../models/habit');
const {HabitModel} =require('../../models/weekHabit')
const setDayArray=async (day)=>{
    let data =""
    let habit=""
    try {
         data=await HabitModel.find()

    } catch (error) {
        return console.log(error)
    }
    if(data.length === 0){
      console.log("Empty")
      console.log(data)
      const habitModel=new HabitModel(
        {
          day,
          week:[
            []
          ]
        }
      )
      try{
        await habitModel.save()
      }catch(err){
          console.log(err)
      }
    }
    else if(data[0].day!=new Date().getDay()){
    try {
         habit=await Habit.find()
    } catch (error) {
        return console.log(error)
    }
      console.log(data[0].day,new Date().getDay())
      const newDayArray =habit.map(habit=>(
        {
          habitname:habit.habitname,
          done:false,
          skipped:false
        }
      ))
      data[0].week.push(newDayArray)
      data[0].day=new Date().getDay()
      try{
        await data[0].save()
      }catch(err){
          return console.log(err)
      }
    
    }
    else{
     console.log("nothing")
    }
  }

  module.exports={setDayArray}