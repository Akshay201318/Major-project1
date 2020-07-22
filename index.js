const express=require('express');
const app=express();
const port=8000;

//using the router
app.use('/',require('./routes'));

app.listen(port,function(err){
           if(err)
           {
             console.log(`Error : ${err}`);
             return;
           }
           console.log(`server is reunning on port: ${port}`);
});