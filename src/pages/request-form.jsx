import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
  Grid,
  Select,
  MenuItem,
  TextareaAutosize,
  InputLabel,
} from '@mui/material';

const CompoundRequestForm = () => {
  const [formData, setFormData] = useState({
    requesterName: '',
    department: '',
    email: '',
    supervisorName: '',
    requestDate: '',
    compoundName: '',
    smilesString: '',
    inchiString: '',
    molecularStructure: null,
    casNumber: '',
    molecularWeight: '',
    targetPathway: '',
    proposedUse: '',
    controlledSubstance: false,
    relatedCompoundIds: '',
    priorityLevel: '',
    justification: '',
    requestedQuantity: '',
    purityRequirement: '',
    timelineRequired: '',
    ipSensitive: false,
    externalDisclosureRisk: false,
    disclosureCommentText: '',
    supportingProtocol: null,
    references: '',
    analogueCompounds: null,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : null,
    });
  };

  const handleSubmit = () => {
    // Implement submit logic
  };

  return (
    <Box
      sx={{
        padding: 3,
        width: 850,
        backgroundColor: '#fff',
        borderRadius: 1,
        boxShadow: 2
      }}
      className="compound-request-form"
    >
      <Typography variant="h6" gutterBottom>
        Compound Synthesis Request
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6">Section 1: Requestor Information</Typography>
          <FormGroup>
            <TextField
              label="Requester Name"
              name="requesterName"
              value={formData.requesterName}
              readOnly
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Department</InputLabel>
              <Select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                {['Medicinal Chemistry', 'Discovery Biology', 'Pharmacology', 'Toxicology'].map((dept) => (
                  <MenuItem key={dept} value={dept}>{dept}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              readOnly
              fullWidth
              margin="normal"
            />
            <TextField
              label="Supervisor Name"
              name="supervisorName"
              value={formData.supervisorName}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Date of Request"
              name="requestDate"
              type="datetime-local"
              value={formData.requestDate}
              readOnly
              fullWidth
              margin="normal"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Section 2: Compound Information</Typography>
          <FormGroup>
            <TextField
              label="Compound Name"
              name="compoundName"
              value={formData.compoundName}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
            />
            <TextareaAutosize
              minRows={3}
              placeholder="SMILES String"
              name="smilesString"
              value={formData.smilesString}
              onChange={handleChange}
              required
              style={{ width: '100%', margin: '12px 0' }}
            />
            <Button
              variant="contained"
              onClick={() => { /* Call validate structure function */ }}
              sx={{ marginBottom: 2 }}
            >
              Validate Structure
            </Button>
            <TextareaAutosize
              minRows={2}
              placeholder="InChI String"
              name="inchiString"
              value={formData.inchiString}
              onChange={handleChange}
              style={{ width: '100%', margin: '12px 0' }}
            />
            <TextField
              label="Molecular Structure"
              type="file"
              name="molecularStructure"
              onChange={handleFileChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="CAS Number"
              name="casNumber"
              value={formData.casNumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Molecular Weight"
              name="molecularWeight"
              value={formData.molecularWeight}
              readOnly
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Target Pathway</InputLabel>
              <Select
                name="targetPathway"
                value={formData.targetPathway}
                onChange={handleChange}
                required
              >
                {['GPCR Signaling', 'Kinase Inhibition', 'Protease Inhibition', 'Ion Channel Modulation', 'Other'].map((pathway) => (
                  <MenuItem key={pathway} value={pathway}>{pathway}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextareaAutosize
              minRows={3}
              placeholder="Proposed Use"
              name="proposedUse"
              value={formData.proposedUse}
              onChange={handleChange}
              required
              style={{ width: '100%', margin: '12px 0' }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="controlledSubstance"
                  checked={formData.controlledSubstance}
                  onChange={handleChange}
                />
              }
              label="Is this a controlled substance?"
            />
            <TextField
              label="Related Compound IDs"
              name="relatedCompoundIds"
              value={formData.relatedCompoundIds}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleSubmit}>
            Save Draft
          </Button>
          <Button variant="contained" color="success" onClick={() => { /* Call preview function */ }}>
            Preview
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompoundRequestForm;