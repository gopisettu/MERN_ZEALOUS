require('./db')
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const gopi = require('./schema');
const route=express.Router();


route.use(bodyParser.urlencoded({ extended: true }));
route.use(bodyParser.json());


///////////ROUTES////
 //READ
 route.get('/get',async(req,res)=>{
    const data=await gopi.find();
res.json(data);
 })
 route.get('/get/status/:name',async(req,res)=>{
    const data= await gopi.find({patientIssue:req.params.name});
    res.json(data);
 })
 route.get('/get/:issue/:status',async(req,res)=>{
    const data=await gopi.find({$and:[{patientIssue:req.params.issue},{patientStatus:req.params.status}]})
    res.json(data);
 })
 
route.get('/get/issue/:name', async (request,response) => {

    const tracks = await gopi.find({patientIssue:request.params.name});
    response.json(tracks);
 
});
 //ony changes for one 
route.get('/get/:issue', async (req, res) => {
   
    const output = await gopi.findOneAndUpdate({patientIssue:req.params.issue} ,{$set:{patientStatus:"treatment(covid)"}},{new:true});
    res.json(output);

});
//Age Filtering
route.get('/get/age/gt/:count',async(req,res)=>{
    const data=await gopi.find({patientAge:{$lt:req.params.count}}).sort({patientName:-1})
    res.json(data);
})
//
//AND Filtering
route.get('/get/and/')


//CREATE
route.post('/post', async (request, response) => {
   
    const data= new gopi(request.body);
    await data.save();
    response.json(data);

});

route.post('/post/gopi',async(req,res)=>{
    const data=new gopi(req.body);
    data.save();
    res.json(data);
})
//UPDATE
route.put('/change/:issue/:status',async(req,res)=>{
    const changed=await gopi.updateMany({patientIssue:req.params.issue},{$set:{patientStatus:req.params.status}})
    res.json(changed);
})
//adding new attribute to the Schema
route.put('/all/gender',async(req,res)=>{
    const data=await gopi.insertOne({patientGender:"name"});
    res.json(data);
})

route.put('/updateCondition/:issue/:status', async (req, res) => {
    try {
        const issue = req.params.issue;
        const status = req.params.status;
        
        const data = await gopi.updateMany({ patientIssue: issue },{ $set: { patientStatus: status, patientID: 10 } }
        );

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

route.put('/updata/:issue/:status',async(req,res)=>{
    const data=await gopi.updateOne({patientIssue:req.params.issue},{$set:{patientStatus:req.params.status}})
    res.json(data);
})

//DELETE
route.delete('/delete/:name',async(req,res)=>{
    const aftDel=await gopi.deleteOne({patientName:req.params.name})
    res.json(aftDel);
})

//deleteByID
route.delete('/delete/',async(request,response)=>{
    const data = await gopi.findByIdAndDelete(id=request.params.id)
    response.json(data)
})

module.exports=route






 
        
   
