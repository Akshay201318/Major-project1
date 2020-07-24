const express=require('express');
const router=express.Router();


const userHabitController=require('../controllers/user_habits_controller');


router.get('http://localhost:8000/habits', userHabitController.userhabit);
module.exports=router;