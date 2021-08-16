import axios from "axios";

// ACTION TYPE
const GET_ALL_SPECIMENS = "GET_ALL_SPECIMENS";

// ACTION CREATOR
const getSpecimens = (specimens) => {
  return {
    type: GET_ALL_SPECIMENS,
    specimens,
  };
};

// THUNK CREATOR
export const fetchSpecimens = () => {
  console.log("FETCHING SPECIMENS>>>>>>>>");
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://macroscope-server.herokuapp.com/api/specimen`
    );
    dispatch(getSpecimens(data));
  };
};

// REDUCER
export default function specimensReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_SPECIMENS:
      return action.specimens;
    default:
      return state;
  }
}
