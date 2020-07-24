const mongoose=require('mongoose');
module.exports.userhabit=function(req,res)
{
    return res.render('habits',{
        title:"Habits",
        habit_list:habits
});
}

