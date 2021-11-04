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
} from '@mui/material';
import { getStudentsAction } from '../redux/actions/studentActions';

const StudentInfoScreen = () => {
  const dispatch = useDispatch();

  const getStudents = useSelector((state: any) => state.getStudents);
  const { data, loading } = getStudents;

  console.log(data);

  useEffect(() => {
    dispatch(getStudentsAction());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container>
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
