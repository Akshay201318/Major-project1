const {HabitModel} =require('../../models/weekHabit');
const removeWeekHabit=async (habitname) => {
    const habitModel=await HabitModel.find();
    const remIndex=habitModel[0].week[0].findIndex(habit=>habit.habitname===habitname);
    habitModel[0].week[habitModel[0].week.length-1].splice(remIndex,1);
    await habitModel[0].save();
}
module.exports={removeWeekHabit};