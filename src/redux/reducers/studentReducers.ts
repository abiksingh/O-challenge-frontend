import { AnyAction } from 'redux';
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

export const getStudentsReducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case GET_STUDENT_REQUEST:
      return {
        loading: true,
      };
    case GET_STUDENT_SUCCESS:
      return {
        loading: false,
        success: true,
        data: action.payload,
      };

    case GET_STUDENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getStudentsByIdReducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case GET_STUDENT_BY_ID_REQUEST:
      return {
        loading: true,
      };
    case GET_STUDENT_BY_ID_SUCCESS:
      return {
        loading: false,
        success: true,
        data: action.payload,
      };

    case GET_STUDENT_BY_ID_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const registerStudentReducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case POST_STUDENT_REQUEST:
      return {
        loading: true,
      };
    case POST_STUDENT_SUCCESS:
      return {
        loading: false,
        success: true,
        data: action.payload,
      };

    case POST_STUDENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const updateStudentReducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case PUT_STUDENT_REQUEST:
      return {
        loading: true,
      };
    case PUT_STUDENT_SUCCESS:
      return {
        loading: false,
        success: true,
        data: action.payload,
      };

    case PUT_STUDENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const studentDeleteReducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case DELETE_STUDENT_REQUEST:
      return { loading: true };
    case DELETE_STUDENT_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case DELETE_STUDENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
