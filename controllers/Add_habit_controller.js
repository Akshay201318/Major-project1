module.exports.addhabit=function(req,res){
    return res.render('add_habit',{title:"Add new habit"});
};
module.exports.add=function(req,res){
    console.log(req.body);
    return res.render('habits',{
        title:"Habits",
        habit:habits
});
};