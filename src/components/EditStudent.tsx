import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Modal, Box, Typography, TextField } from '@mui/material';

import { updateStudent } from '../redux/actions/studentActions';
import { style, InputFieldWrapper } from '../UIHelpers/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const EditStudent = ({ id, first, last, date, module, time, money }: any) => {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  const [firstName, setFirstName] = useState(first);
  const [lastName, setLastName] = useState(last);
  const [dateOfBirth, setDateOfBirth] = useState(date);
  const [courseName, setCourseName] = useState(module);
  const [hour, setHour] = useState(time);
  const [price, setPrice] = useState(money);

  const updateHandler = () => {
    dispatch(
      updateStudent(
        firstName,
        lastName,
        dateOfBirth,
        courseName,
        hour,
        price,
        id
      )
    );
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{ backgroundColor: '#29D4B2' }}
        onClick={handleOpen}
      >
        Edit
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

          <form onSubmit={updateHandler}>
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
              type="submit"
              variant="contained"
              sx={{ float: 'right', backgroundColor: '#29D4B2' }}
            >
              Save
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default EditStudent;
