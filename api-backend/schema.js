const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    patientID: { type: Number, required: true },
    patientName: { type: String, required: true },
    patientAge: { type: Number, required: true },
    patientBloodGroup: { type: String, required: true },
    patientAddress: { type: String, required: true },
    patientContact: { type: Number, required: true },
    patientIssue: { type: String, required: true },
    patientStatus: { type: String, required: true }
});

const patientDetails = mongoose.model('patientDetails', schema);

module.exports = patientDetails;
