import React, { useEffect } from 'react';
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
} from '@mui/material';
import {
  getStudentsAction,
  deleteStudent,
} from '../redux/actions/studentActions';

import EditStudent from '../components/EditStudent';
import AddStudent from '../components/AddStudent';

const StudentInfoScreen = () => {
  const dispatch = useDispatch();

  const getStudents = useSelector((state: any) => state.getStudents);
  const { data } = getStudents;

  console.log(data);

  useEffect(() => {
    dispatch(getStudentsAction());
  }, [dispatch]);

  const deleteHandler = (id: string) => {
    dispatch(deleteStudent(id));
    window.location.reload();
  };

  return (
    <>
      <Header />
      <Container>
        <AddStudent />

        <TableContainer sx={{ marginTop: 10 }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                    <TableCell align="right">
                      <EditStudent id={student._id} />
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        onClick={() => deleteHandler(student._id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
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
