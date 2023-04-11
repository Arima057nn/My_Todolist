import { SET_JOB, ADD_JOB, DELETE_JOB } from "../constants/todo";

export const initState = {
  job: "",
  jobs: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_JOB:
      return state;

    case ADD_JOB:
      return { ...state, jobs: [...state.jobs, job] };

    case DELETE_JOB:
      return state;

    default:
      break;
  }
};
