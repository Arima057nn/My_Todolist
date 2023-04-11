import { SET_JOB, ADD_JOB, DELETE_JOB } from "../constants/todo";

export const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};

export const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

export const deleteJob = () => {
  return {
    type: DELETE_JOB,
  };
};
