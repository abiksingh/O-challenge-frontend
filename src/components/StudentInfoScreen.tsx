import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../UIHelpers/header';
import {
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  Modal,
  Box,
  Typography,
  TextField,
} from '@mui/material';
import { getStudentsAction } from '../redux/actions/studentActions';
import { style } from '../UIHelpers/styles';

const StudentInfoScreen = () => {
  const dispatch = useDispatch();

  const getStudents = useSelector((state: any) => state.getStudents);
  const { data, loading } = getStudents;

  console.log(data);

  useEffect(() => {
    dispatch(getStudentsAction());
  }, [dispatch]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Header />
      <Container>
        <Button sx={{ marginTop: 10 }} variant="contained" onClick={handleOpen}>
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
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Date of Birth"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Course Name"
              variant="outlined"
            />
            <TextField id="outlined-basic" label="Hours" variant="outlined" />
            <TextField id="outlined-basic" label="Price" variant="outlined" />
            <Button variant="contained">Save</Button>
          </Box>
        </Modal>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650, marginTop: 10 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell align="right">Date of Birth</TableCell>
                <TableCell align="right">Course</TableCell>
                <TableCell align="right">Hours</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right"> </TableCell>
                <TableCell align="right"> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((student: any) => (
                  <TableRow
                    key={student._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {student.firstName}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {student.lastName}
                    </TableCell>

                    <TableCell align="right">{student.dateOfBirth}</TableCell>
                    <TableCell align="right">{student.course}</TableCell>
                    <TableCell align="right">{student.hours}</TableCell>
                    <TableCell align="right">{student.price}</TableCell>
                    <TableCell align="right">Edit</TableCell>
                    <TableCell align="right">Delete</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default StudentInfoScreen;
