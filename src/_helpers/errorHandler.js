import { logout } from "./../_actions/auth_actions";

export function errorHandler(dispatch, error, type) {
  type = `${type}_REJECTED`;
  if (error.status === 401) {
    dispatch({
      type: type,
      payload: "You are not authorized to do this. Please login and try again."
    });
    logout();
  } else {
    dispatch({
      type: type,
      payload: error
    });
  }
}
