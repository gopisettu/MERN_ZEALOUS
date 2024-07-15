const mongoose=require('mongoose')
const url = "mongodb+srv://arjun:Arjun2004@hospitaldetails.zuxw8ad.mongodb.net/?retryWrites=true&w=majority&appName=HospitalDetails";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
mongoose.connect(url, clientOptions)