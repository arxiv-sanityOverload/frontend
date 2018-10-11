import axios from "axios";

export function fetchSubCategory(subCategory, limit, offset) {
  return dispatch => {
    axios.get(`http://localhost:3000/v1/${subCategory}/sorted?limit=${limit}&offset=${offset}`)
      .then(response => {
        dispatch({
          type: "SUBCATEGORY_FULFILLED",
          subCategory: response.data,
        })
      }) 
      .catch(error => {
        dispatch({
          type: "SUBCATEGORY_REJECTED",
          subCategory: error,
      })
    })
  }
}

export function fetchGithubSearch(title) {
  return dispatch => {
    axios.get(`https://api.github.com/search/repositories?q=${title}&sort=stars&order=desc`)
      .then(response => {
        if(response.data.total_count !== 0) {
          dispatch({
            type: "GITHUB_FULFILLED",
            githubData: response.data,
          })
        }  
      })
      .catch(error => {
        dispatch({
          type: "GITHUB_REJECTED",
          githubData: error,
      })
    })
  }
}