require('./db');
const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const gopi = require('./schema');
const route = express.Router();
route.use(cors());
route.use(bodyParser.urlencoded({ extended: true }));
route.use(bodyParser.json());

// READ
route.get('/get', async (req, res) => {
    try {
        const data = await gopi.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

route.get('/get/status/:action', async (req, res) => {
    try {
        const data = await gopi.find({ patientStatus: req.params.action });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


route.get('/get/:issue/:status', async (req, res) => {
    try {
        const data = await gopi.find({ $and: [{ patientIssue: req.params.issue }, { patientStatus: req.params.status }] });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

route.get('/get/issue/:name', async (req, res) => {
    try {
        const tracks = await gopi.find({ patientIssue: req.params.name });
        res.json(tracks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a single document
route.get('/get/:issue', async (req, res) => {
    try {
        const output = await gopi.findOneAndUpdate({ patientIssue: req.params.issue }, { $set: { patientStatus: "treatment(covid)" } }, { new: true });
        res.json(output);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Age Filtering
route.get('/get/age/gt/:count', async (req, res) => {
    try {
        const data = await gopi.find({ patientAge: { $gt: req.params.count } }).sort({ patientName: -1 });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// CREATE
route.post('/post', async (req, res) => {
    try {
        const data = new gopi(req.body);
        await data.save();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



// UPDATE
route.put('/change/:issue/:status', async (req, res) => {
    try {
        const changed = await gopi.updateMany({ patientIssue: req.params.issue }, { $set: { patientStatus: req.params.status } });
        res.json(changed);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Adding new attribute to the Schema
route.put('/all/gender', async (req, res) => {
    try {
        const data = await gopi.updateMany({}, { $set: { patientGender: "name" } });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

route.put('/updateCondition/:issue/:status', async (req, res) => {
    try {
        const data = await gopi.updateMany({ patientIssue: req.params.issue }, { $set: { patientStatus: req.params.status, patientID: 10 } });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

route.put('/updata/:issue/:status', async (req, res) => {
    try {
        const data = await gopi.updateOne({ patientIssue: req.params.issue }, { $set: { patientStatus: req.params.status } });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE
route.delete('/delete/:name', async (req, res) => {
    try {
        const aftDel = await gopi.deleteOne({ patientName: req.params.name });
        res.json(aftDel);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

route.delete('/delete/', async (req, res) => {
    try {
        const data = await gopi.findByIdAndDelete(req.query.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = route;
