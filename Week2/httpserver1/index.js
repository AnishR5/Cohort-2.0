const express=require('express')
const app=express();
const users=[{
    name:'John',
    kidneys:[{
        healthy:true
    },{healthy:false}]
}]

app.get('/',(req,resp)=>{
    const johnKidneys=users[0].kidneys
    const numOfKidneys=johnKidneys.length;
    const HealthyKidneies=johnKidneys.filter((kidney)=>kidney.healthy===true)
    const numOfHealthyKidneies=HealthyKidneies.length
    resp.json({
        numOfKidneys,
        numOfHealthyKidneies
    })
    
})

app.listen(3000,console.log("App stared on server 3000"))