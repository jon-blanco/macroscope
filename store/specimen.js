import axios from "axios";

// ACTION TYPE
const GET_SPECIMEN = "GET_SPECIMEN";

// ACTION CREATOR
const getSpecimen = (specimen) => {
  return {
    type: GET_SPECIMEN,
    specimen,
  };
};

// THUNK CREATOR
export const setSpecimenThunk = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://macroscope-server.herokuapp.com/api/specimen/${id}`
    );
    dispatch(getSpecimen(data));
  };
};

// REDUCER
export default function specimenReducer(state = [], action) {
  switch (action.type) {
    case GET_SPECIMEN:
      return action.specimen;
    default:
      return state;
  }
}
