// import axios from "axios";
// import * as apiEndpoints from "../constants/apiEndpoints";
import axios from "axios";

export function fetchSubCategory(subCategory, limit, offset) {
  return dispatch => {
    return dispatch({
      type: "SUBCATEGORY",
      subCategory: axios.get(`http://localhost:3000/v1/${subCategory}/recents?limit=${limit}&offset=${offset}`)
    })
    // .then(result => {
    //   console.log(result);
    // }).catch(error => {
    //   console.log(error);
    // })
    ;
  };
}

export function fetchGithubSearch(title) {
  return dispatch => {
    return dispatch({
      type: "GITHUB",
      githubData: axios.get(`https://api.github.com/search/repositories?q=${title}&sort=stars&order=desc`)
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