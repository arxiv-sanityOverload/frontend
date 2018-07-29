// import axios from "axios";
// import * as apiEndpoints from "../constants/apiEndpoints";
import axios from "axios";

export function fetchSubCategory(subCategory) {
  return dispatch => {
    return dispatch({
      type: "SUBCATEGORY",
      subCategory: axios.get(`http://localhost:3000/v1/${subCategory}/recents`)
    })
    // .then(result => {
    //   console.log(result);
    // }).catch(error => {
    //   console.log(error);
    // })
    ;
  };
}

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