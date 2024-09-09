//Hospital_in_Memory
const express=require('express')
const app=express();
var users=[{
    name:'Manoj',
    kidneys:[{
        healthy:false
    },{
        healthy:true
    }]
}]
//users can check how many kidneys they have and their health condition
app.get('/',(req,res)=>{
    const johnKidneys=users[0].kidneys;
    const numOfKidneys=johnKidneys.length;
    let numOfHealthyKidneys=0;
    for(let i=0;i<numOfKidneys;i++){
        if(johnKidneys[i].healthy==true) numOfHealthyKidneys++;
    }
    const unhealthykidneys=numOfKidneys-numOfHealthyKidneys;
    console.log(johnKidneys," ",numOfKidneys," ",numOfHealthyKidneys);
    res.json({
        numOfKidneys,
        numOfHealthyKidneys,
        unhealthykidneys
    })
})

app.use(express.json())//inorder to read body from req properly basically here for post request

//user can add a new kidney
app.post('/',(req,res)=>{
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done"
    })
})

//user can replace a kidney and make it healthy
app.put("/",(req,res)=>{
    let healthyKidneys=0
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy)
        users[0].kidneys[i].healthy=true;
        else healthyKidneys++
    }
    if(healthyKidneys==users[0].kidneys.length){
        res.status(411).json({
            msg:"No unhealthy kidneys to update"
        })
    }
    else 
        res.json({
            statusofPut:"Done"
        })
})

//user can remove a kidney
app.delete("/",(req,res)=>{
    const newKidneys=users[0].kidneys.filter(function(items){
        return items.healthy==true;
    });
    let atleastoneUnhealthykidney=(newKidneys.length<users[0].kidneys.length)?true:false;
    
    if(atleastoneUnhealthykidney)
    res.json({
        stausOfDelete:"Done"
    }),users[0].kidneys=newKidneys
    else{
        res.status(411).json({
            msg:"You Have no bad Kidneys"
        })
    }
})
app.listen(3000)
