import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, Box, Typography, TextField } from '@mui/material';
import { addStudent } from '../redux/actions/studentActions';
import { style, InputFieldWrapper } from '../UIHelpers/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const AddStudent = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [courseName, setCourseName] = useState('');
  const [hour, setHour] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = () => {
    dispatch(
      addStudent(firstName, lastName, dateOfBirth, courseName, hour, price)
    );
  };
  return (
    <>
      <Button
        sx={{ marginTop: 10, backgroundColor: '#29D4B2' }}
        variant="contained"
        onClick={handleOpen}
      >
        Add Student
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Student
          </Typography>
          <form onSubmit={handleSubmit}>
            <InputFieldWrapper>
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required={true}
                sx={{ marginTop: 2, marginLeft: 1 }}
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required={true}
                sx={{ marginTop: 2, marginLeft: 1 }}
              />
              <TextField
                id="outlined-basic"
                label="Date of Birth"
                variant="outlined"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required={true}
                sx={{ marginTop: 2, marginLeft: 1 }}
              />
              <TextField
                id="outlined-basic"
                label="Course Name"
                variant="outlined"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                required={true}
                sx={{ marginTop: 2, marginLeft: 1 }}
              />
              <TextField
                id="outlined-basic"
                label="Hours"
                variant="outlined"
                value={hour}
                onChange={(e: any) => setHour(e.target.value)}
                required={true}
                sx={{ marginTop: 2, marginLeft: 1 }}
              />
              <TextField
                id="outlined-basic"
                label="Price"
                variant="outlined"
                value={price}
                onChange={(e: any) => setPrice(e.target.value)}
                required={true}
                sx={{ marginTop: 2, marginLeft: 1 }}
              />
            </InputFieldWrapper>
            <Button
              fullWidth={!matches ? true : false}
              sx={{ float: 'right', backgroundColor: '#29D4B2' }}
              type="submit"
              variant="contained"
            >
              Save
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default AddStudent;
