import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { TextField, Button, FormControl } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { callPost } from './service';

const Form = () => {
    const [newItem, setNewItem] = useState({
        patientID: '',
        patientName: '',
        patientAge: '',
        patientBloodGroup: '',
        patientAddress: '',
        patientContact: '',
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
        <Container className="mt-4" style={{ backgroundColor: '#f7f7f7', padding: '20px', borderRadius: '10px' }}>
            <div className="mb-3" style={{ marginBottom: '20px' }}>
                <h2 className="text-primary display-6 text-center">Add Patient Details</h2>
            </div>
            <div className="mb-3" style={{ marginBottom: '20px' }}>
                <TextField
                    id="patient-id"
                    name="patientID"
                    value={newItem.patientID}
                    onChange={collect}
                    label="Patient ID"
                    variant="outlined"
                    fullWidth
                    style={{ marginBottom: '15px' }}
                />
            </div>
            <div className="mb-3" style={{ marginBottom: '20px' }}>
                <TextField
                    id="patient-name"
                    name="patientName"
                    value={newItem.patientName}
                    onChange={collect}
                    label="Patient Name"
                    variant="outlined"
                    fullWidth
                    style={{ marginBottom: '15px' }}
                />
            </div>
            <div className="mb-3" style={{ marginBottom: '20px' }}>
                <FormControl fullWidth variant="outlined" style={{ marginBottom: '15px' }}>
                    <InputLabel>Age</InputLabel>
                    <Select
                        name="patientAge"
                        value={newItem.patientAge}
                        onChange={collect}
                        label="Patient Age"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="mb-3" style={{ marginBottom: '20px' }}>
                <FormControl fullWidth variant="outlined" style={{ marginBottom: '15px' }}>
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
            <div className="mb-3" style={{ marginBottom: '20px' }}>
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
                    style={{ marginBottom: '15px' }}
                />
            </div>
            <div className="mb-3" style={{ marginBottom: '20px' }}>
                <TextField
                    id="patient-contact"
                    name="patientContact"
                    value={newItem.patientContact}
                    onChange={collect}
                    label="Patient Contact"
                    variant="outlined"
                    fullWidth
                    style={{ marginBottom: '15px' }}
                />
            </div>
            <div className="mb-3" style={{ marginBottom: '20px' }}>
                <TextField
                    id="patient-issue"
                    name="patientIssue"
                    value={newItem.patientIssue}
                    onChange={collect}
                    label="Patient Issue"
                    variant="outlined"
                    fullWidth
                    style={{ marginBottom: '15px' }}
                />
            </div>
            <div className="mb-3" style={{ marginBottom: '20px' }}>
                <TextField
                    id="patient-status"
                    name="patientStatus"
                    value={newItem.patientStatus}
                    onChange={collect}
                    label="Patient Status"
                    variant="outlined"
                    fullWidth
                    style={{ marginBottom: '15px' }}
                />
            </div>
            <div className="row justify-content-around mt-2 mb-2">
                <Button onClick={handleSubmit} variant="outlined" className="col-2">
                    <PersonAddIcon />
                </Button>
            </div>
        </Container>
    );
};

export default Form;
