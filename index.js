const express=require('express');

const path= require('path');
const port=8000;
const app=express();

const db=require('./config/mongoose');
const Habit=require('./models/habit');

//using the router
//app.use('/',require('./routes'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('static'));


app.get('/',function(req,res){
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

 console.log('********', newhabit);

      const habits=await Habit.find();
        
 
    return res.render('habits',{
       title:"Habits",
       habit_list: habits
   
   
});
 

});
      
});


app.get('/delete-habit', function(req,res){
          
  let id=req.query.id;
  Habit.findByIdAndDelete(id , function(err)
  {
      if(err)
      {
          console.log('error in deleting the contact');
          return;
      }
          
      return res.redirect('/habits');

  });
  
});


app.get('/today',async function(req,res){

  const habits= await Habit.find();
  return res.render('today',{
    title:"Today's Schedule",
    habit_list:habits
  });
      

});




app.listen(port,function(err){
           if(err)
           {
             console.log(`Error : ${err}`);
             return;
           }
           console.log(`server is reunning on port: ${port}`);
});