import React, { useState } from 'react';
import { TextField, Container, Button } from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import filter from './Filter';

const Filter = () => {
  const [collect, setCollect] = useState({
    patientStatus: ''
  });

  const gather = (event) => {
    const { name, value } = event.target;
    setCollect((prevItem) => ({
      ...prevItem,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await filter(collect);
      alert(JSON.stringify(response.data));
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <Container className="form-container">
      <div className="form-header">
        <h2 className="form-title">Filter Patient Details by Status</h2>
      </div>
      <div className="row">
        <div className="col-8 form-group">
          <TextField
            id="patient-status"
            name="patientStatus"
            value={collect.patientStatus}
            onChange={gather}
            label="Patient Status"
            variant="outlined"
            fullWidth
          />
        </div>
      </div>
      <div className="row form-actions">
        <Button onClick={handleSubmit} variant="outlined" className="submit-button">
          <PersonSearchIcon />
        </Button>
      </div>
    </Container>
  );
};

export default Filter;
