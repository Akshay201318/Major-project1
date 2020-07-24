const express=require('express');
const router=express.Router();


const userHabitController=require('../controllers/user_habits_controller');


router.get('/habits', userHabitController.userhabit);
router.get('/profile' , userHabitController.profile);
router.get('/create', userHabitController.create);


module.exports=router;