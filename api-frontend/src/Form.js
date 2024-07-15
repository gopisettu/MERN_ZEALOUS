import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { TextField, Button, FormControl } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { callPost } from './service';
import './index.css';

const Form = () => {
    const [newItem, setNewItem] = useState({
        patientID: 0,
        patientName: '',
        patientAge: 0,
        patientBloodGroup: '',
        patientAddress: '',
        patientContact: 0,
        patientIssue: '',
        patientStatus: ''
    });

    const collect = (event) => {
        const { name, value } = event.target;
        setNewItem((prevItem) => ({
            ...prevItem, [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await callPost(newItem);
            alert(JSON.stringify(response.data));
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };

    return (
        <Container className="form-container">
            <div className="form-header">
                <h2 className="form-title">Add Patient Details</h2>
            </div>
            <div className="form-group">
                <TextField
                    id="patient-id"
                    name="patientID"
                    value={newItem.patientID}
                    onChange={collect}
                    label="Patient ID"
                    variant="outlined"
                    fullWidth
                />
            </div>
            <div className="form-group">
                <TextField
                    id="patient-name"
                    name="patientName"
                    value={newItem.patientName}
                    onChange={collect}
                    label="Patient Name"
                    variant="outlined"
                    fullWidth
                />
            </div>
            <div className="form-group">
                <FormControl fullWidth variant="outlined">
                    <InputLabel>Age</InputLabel>
                    <Select
                        name="patientAge"
                        value={newItem.patientAge}
                        onChange={collect}
                        label="Age"
                    >
                        {[...Array(121).keys()].map(age => (
                            <MenuItem key={age} value={age}>{age}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div className="form-group">
                <FormControl fullWidth variant="outlined">
                    <InputLabel>Patient Blood Group</InputLabel>
                    <Select
                        name="patientBloodGroup"
                        value={newItem.patientBloodGroup}
                        onChange={collect}
                        label="Patient Blood Group"
                    >
                        <MenuItem value="">
                            <em>Select Blood Group</em>
                        </MenuItem>
                        <MenuItem value="A+">A+</MenuItem>
                        <MenuItem value="A-">A-</MenuItem>
                        <MenuItem value="B+">B+</MenuItem>
                        <MenuItem value="B-">B-</MenuItem>
                        <MenuItem value="AB+">AB+</MenuItem>
                        <MenuItem value="AB-">AB-</MenuItem>
                        <MenuItem value="O+">O+</MenuItem>
                        <MenuItem value="O-">O-</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="form-group">
                <TextField
                    id="patient-address"
                    name="patientAddress"
                    value={newItem.patientAddress}
                    onChange={collect}
                    label="Patient Address"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                />
            </div>
            <div className="form-group">
                <TextField
                    id="patient-contact"
                    name="patientContact"
                    value={newItem.patientContact}
                    onChange={collect}
                    label="Patient Contact"
                    variant="outlined"
                    fullWidth
                />
            </div>
            <div className="form-group">
                <TextField
                    id="patient-issue"
                    name="patientIssue"
                    value={newItem.patientIssue}
                    onChange={collect}
                    label="Patient Issue"
                    variant="outlined"
                    fullWidth
                />
            </div>
            <div className="form-group">
                <TextField
                    id="patient-status"
                    name="patientStatus"
                    value={newItem.patientStatus}
                    onChange={collect}
                    label="Patient Status"
                    variant="outlined"
                    fullWidth
                />
            </div>
            <div className="form-actions">
                <Button onClick={handleSubmit} variant="outlined" className="submit-button">
                    <PersonAddIcon />
                </Button>
            </div>
        </Container>
    );
};

export default Form;
