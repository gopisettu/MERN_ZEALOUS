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
                        label="Patient Age"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                   
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                        <MenuItem value={14}>14</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                        <MenuItem value={17}>17</MenuItem>
                        <MenuItem value={18}>18</MenuItem>
                        <MenuItem value={19}>19</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={21}>21</MenuItem>
                        <MenuItem value={22}>22</MenuItem>
                        <MenuItem value={23}>23</MenuItem>
                        <MenuItem value={24}>24</MenuItem>
                        <MenuItem value={25}>25</MenuItem>
                        <MenuItem value={26}>26</MenuItem>
                        <MenuItem value={27}>27</MenuItem>
                        <MenuItem value={28}>28</MenuItem>
                        <MenuItem value={29}>29</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={31}>31</MenuItem>
                        <MenuItem value={32}>32</MenuItem>
                        <MenuItem value={33}>33</MenuItem>
                        <MenuItem value={34}>34</MenuItem>
                        <MenuItem value={35}>35</MenuItem>
                        <MenuItem value={36}>36</MenuItem>
                        <MenuItem value={36}>37</MenuItem>
                        <MenuItem value={38}>38</MenuItem>
                        <MenuItem value={39}>39</MenuItem>
                        <MenuItem value={40}>40</MenuItem>
                        <MenuItem value={41}>41</MenuItem>

                        <MenuItem value={42}>42</MenuItem>
                        <MenuItem value={43}>43</MenuItem>
                        <MenuItem value={44}>44</MenuItem>
                        <MenuItem value={45}>45</MenuItem>
                        <MenuItem value={46}>46</MenuItem>
                        <MenuItem value={47}>47</MenuItem>
                        <MenuItem value={48}>48</MenuItem>
                        <MenuItem value={49}>49</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={51}>51</MenuItem>
                        <MenuItem value={52}>52</MenuItem>
                        <MenuItem value={53}>53</MenuItem>
                        <MenuItem value={54}>54</MenuItem>
                        <MenuItem value={55}>55</MenuItem>
                        <MenuItem value={56}>56</MenuItem>
                        <MenuItem value={57}>57</MenuItem>
                        <MenuItem value={58}>58</MenuItem>
                        <MenuItem value={59}>59</MenuItem>
                        <MenuItem value={60}>60</MenuItem>
                        <MenuItem value={61}>61</MenuItem>
                        <MenuItem value={62}>62</MenuItem>
                        <MenuItem value={63}>63</MenuItem>
                        <MenuItem value={64}>64</MenuItem>
                        <MenuItem value={65}>65</MenuItem>
                        <MenuItem value={66}>66</MenuItem>
                        <MenuItem value={67}>67</MenuItem>
                        <MenuItem value={68}>68</MenuItem>
                        <MenuItem value={69}>69</MenuItem>
                        <MenuItem value={70}>70</MenuItem>
                        <MenuItem value={71}>71</MenuItem>
                        <MenuItem value={72}>72</MenuItem>
                        <MenuItem value={73}>73</MenuItem>
                        <MenuItem value={74}>74</MenuItem>
                        <MenuItem value={75}>75</MenuItem>
                        <MenuItem value={76}>76</MenuItem>
                        <MenuItem value={77}>77</MenuItem>
                        <MenuItem value={78}>78</MenuItem>
                        <MenuItem value={79}>79</MenuItem>
                        <MenuItem value={80}>80</MenuItem>
                        <MenuItem value={81}>81</MenuItem>
                        <MenuItem value={82}>82</MenuItem>
                        <MenuItem value={83}>83</MenuItem>
                        <MenuItem value={84}>84</MenuItem>
                        <MenuItem value={85}>85</MenuItem>
                        <MenuItem value={86}>86</MenuItem>
                        <MenuItem value={87}>87</MenuItem>
                        <MenuItem value={88}>88</MenuItem>
                        <MenuItem value={89}>89</MenuItem>
                        <MenuItem value={90}>90</MenuItem>
                        <MenuItem value={91}>91</MenuItem>
                        <MenuItem value={92}>92</MenuItem>
                        <MenuItem value={93}>93</MenuItem>
                        <MenuItem value={94}>94</MenuItem>
                        <MenuItem value={95}>95</MenuItem>
                        <MenuItem value={96}>96</MenuItem>
                        <MenuItem value={97}>97</MenuItem>
                        <MenuItem value={98}>98</MenuItem>
                        <MenuItem value={99}>99</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                        <MenuItem value={101}>101</MenuItem>
                        <MenuItem value={102}>102</MenuItem>
                        <MenuItem value={103}>103</MenuItem>
                        <MenuItem value={104}>104</MenuItem>
                        <MenuItem value={105}>105</MenuItem>
                        <MenuItem value={106}>106</MenuItem>
                        <MenuItem value={107}>107</MenuItem>
                        <MenuItem value={108}>108</MenuItem>
                        <MenuItem value={109}>109</MenuItem>
                        <MenuItem value={110}>110</MenuItem>
                        <MenuItem value={111}>111</MenuItem>
                     
                       
                        <MenuItem value={112}>112</MenuItem>
                        <MenuItem value={113}>113</MenuItem>
                        <MenuItem value={114}>114</MenuItem>
                        <MenuItem value={115}>115</MenuItem>
                        <MenuItem value={116}>116</MenuItem>
                        <MenuItem value={117}>117</MenuItem>
                        <MenuItem value={118}>118</MenuItem>
                        <MenuItem value={119}>119</MenuItem>
                        <MenuItem value={120}>120</MenuItem>
                       
                        
                        
                        

                        

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
