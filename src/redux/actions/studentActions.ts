import axios from 'axios';
import { Dispatch } from 'redux';
import {
  DELETE_STUDENT_FAIL,
  DELETE_STUDENT_REQUEST,
  DELETE_STUDENT_SUCCESS,
  GET_STUDENT_BY_ID_FAIL,
  GET_STUDENT_BY_ID_REQUEST,
  GET_STUDENT_BY_ID_SUCCESS,
  GET_STUDENT_FAIL,
  GET_STUDENT_REQUEST,
  GET_STUDENT_SUCCESS,
  POST_STUDENT_FAIL,
  POST_STUDENT_REQUEST,
  POST_STUDENT_SUCCESS,
  PUT_STUDENT_FAIL,
  PUT_STUDENT_REQUEST,
  PUT_STUDENT_SUCCESS,
} from '../constants/studentConstants';

export const getStudentsAction = () => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: GET_STUDENT_REQUEST,
    });

    const { data } = await axios.get(`/api/students`);

    dispatch({
      type: GET_STUDENT_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_STUDENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getStudentsById = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: GET_STUDENT_BY_ID_REQUEST,
    });

    const { data } = await axios.get(`/api/students/:${id}`);

    dispatch({
      type: GET_STUDENT_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_STUDENT_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addStudent =
  (
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    course: string,
    hours: number,
    price: number
  ) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: POST_STUDENT_REQUEST,
      });

      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `/api/register`,
        { firstName, lastName, dateOfBirth, course, hours, price },
        config
      );

      dispatch({
        type: POST_STUDENT_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: POST_STUDENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const updateStudent =
  (
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    course: string,
    hours: number,
    price: number,
    id: string
  ) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: PUT_STUDENT_REQUEST,
      });

      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const { data } = await axios.put(
        `/api/student/:${id}`,
        { firstName, lastName, dateOfBirth, course, hours, price },
        config
      );

      dispatch({
        type: PUT_STUDENT_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: PUT_STUDENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteStudent = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: DELETE_STUDENT_REQUEST,
    });

    await axios.delete(`/api/student/${id}`);

    dispatch({
      type: DELETE_STUDENT_SUCCESS,
    });
  } catch (error: any) {
    dispatch({
      type: DELETE_STUDENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
