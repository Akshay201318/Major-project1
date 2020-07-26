const {HabitModel} =require('../../models/weekHabit')
const weekHabit=async ({habitname,time})=>{
    let habitModel=""
    try {
         habitModel=await HabitModel.find()

    } catch (error) {
        return console.log(error)
    }
    const length=habitModel[0].week.length-1;
    try{
        await habitModel[0].week[length].push(
            {
                habitname,
                time,
                done:false,
                skipped:false
            }
        )
        await habitModel[0].save()
    }catch(err){
        return console.log(err)
    }
}
module.exports={weekHabit}