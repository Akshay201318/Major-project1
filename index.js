const express=require('express');

const path= require('path');
const port=8000;
const app=express();

const db=require('./config/mongoose');
const Habit=require('./models/habit');
const {weekHabit}=require('./static/js/weekHabit');
const {removeWeekHabit}= require('./static/js/removeWeekHabit');
const {HabitModel}=require('./models/weekHabit');
const {setDayArray}=require('./static/js/setDayArray')
//using the router
//app.use('/',require('./routes'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.use(express.static('static'));



app.get('/',function(req,res){
  const day = new Date().getDay()
  setDayArray(day)
  return res.render('home',{title:"Habit Tracker"});
});




app.get('/Add_habit',function(req,res){
  return res.render('add_habit',{title:"Add new habit"});
});


app.get('/habits',async function(req,res){


  const habits=await Habit.find();
  return res.render('habits',{
    title:"Add new habit",
     habit_list: habits
  });
});

app.post('/add', function(req,res){
  //contactList.push(req.body);


  Habit.create({
    habitname: req.body.habitname,
    time: req.body.time
}, async function(err, newhabit){


 if(err)
 {
     console.log('error in creating a habit');
     return;
 }
 weekHabit(req.body);
 console.log('********', newhabit);

      const habits=await Habit.find();
        
 
    return res.render('habits',{
       title:"Habits",
       habit_list: habits
   
   
});
 

});
      
});


app.get('/delete-habit', async function(req,res){
          
  let id=req.query.id;
  const {habitname}=await Habit.findById(id);
  // console.log(habit.habitname)
  Habit.findByIdAndDelete(id , function(err)
  {
      if(err)
      {
          console.log('error in deleting the contact');
          return;
      }
    removeWeekHabit(habitname)
      return res.redirect('/habits');

  });
  
});


app.get('/today', async function(req,res){

      
    const habitModel=await HabitModel.find();
     
      
  
  return res.render('today',{
    title:"Today's Schedule",
    
    habit_list:habitModel[0].week[habitModel[0].week.length-1]
  });
      

});




app.get('/today/done', async function(req,res){

  const id=req.query.id;
  console.log(id);
  const habitModel=await HabitModel.find();
    const done=habitModel[0].week[habitModel[0].week.length-1].findIndex(habit=>habit.id===id);
    habitModel[0].week[habitModel[0].week.length-1][done].done=!habitModel[0].week[habitModel[0].week.length-1][done].done;
    await habitModel[0].save();
    return res.render('today',{
      title:"Today's Schedule",
      
      habit_list:habitModel[0].week[habitModel[0].week.length-1]
    });

} );



app.get('/today/not_done', async function(req,res){

  const id=req.query.id;
  console.log(id);
  const habitModel=await HabitModel.find();
    const done=habitModel[0].week[habitModel[0].week.length-1].findIndex(habit=>habit.id===id);
    habitModel[0].week[habitModel[0].week.length-1][done].skipped=!habitModel[0].week[habitModel[0].week.length-1][done].skipped;
    await habitModel[0].save();
    return res.render('today',{
      title:"Today's Schedule",
      
      habit_list:habitModel[0].week[habitModel[0].week.length-1]
    });

} );




app.get('/weakly_status',async function(req,res){

  

  const habits=await Habit.find();
  const habitModel=await HabitModel.find();
  const hab=habitModel[0].week;

  return res.render('weekly',{
    title:"weekly_status",
    habit_list: habits,
    habit_list1:habitModel[0].week

  });
});




app.get('/weekly_status/done', async function(req,res){

  const id=req.query.id;
  const habits=await Habit.find();
  const habitModel=await HabitModel.find();
    const done=habitModel[0].week[habitModel[0].week.length-1].findIndex(habit=>habit.id===id);
    habitModel[0].week[habitModel[0].week.length-1][done].done=!habitModel[0].week[habitModel[0].week.length-1][done].done;
    await habitModel[0].save();
    return res.render('weekly',{
      title:"Weekly Status",
      habit_list: habits,
      habit_list1:habitModel[0].week
      
    });

} );



app.get('/weekly_status/not_done', async function(req,res){

  const id=req.query.id;
  const habitModel=await HabitModel.find();
  const habits=await Habit.find();
    const done=habitModel[0].week[habitModel[0].week.length-1].findIndex(habit=>habit.id===id);
    habitModel[0].week[habitModel[0].week.length-1][done].skipped=!habitModel[0].week[habitModel[0].week.length-1][done].skipped;
    await habitModel[0].save();
    return res.render('weekly',{
      title:"Weekly status",
      habit_list: habits,
      habit_list1:habitModel[0].week
      
    });

} );





app.listen(port,function(err){
           if(err)
           {
             console.log(`Error : ${err}`);
             return;
           }
           console.log(`server is reunning on port: ${port}`);
});