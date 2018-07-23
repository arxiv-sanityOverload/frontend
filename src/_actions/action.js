// import axios from "axios";
// import * as apiEndpoints from "../constants/apiEndpoints";

export function action(payload) {
  return dispatch => {
    return dispatch({
      type: "ACTION",
      // payload: axios.get(apiEndpoints.test)
      payload: Promise.resolve(payload)
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
}