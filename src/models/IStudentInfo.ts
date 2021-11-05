export default interface IRootState {
  getStudents: {
    data: any;
  };
}

export default interface IStudentState {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  hours: number;
  price: number;
  course: string;
  _id: string;
}
