const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();




const homeController=require('../controllers/home_controller');
const habitController=require('../controllers/user_habits_controller');
const addHabitController=require('../controllers/Add_habit_controller');


router.get('/', homeController.home);
router.get('/habits',habitController.userhabit)
router.get('/Add_habit',addHabitController.addhabit);


module.exports=router;