export function reducer(
  state = {
    processing: false,
    data: null,
    error: null
  },
  action
) {
  switch (action.type) {
    case "ACTION_PENDING": {
      return {
        ...state,
        processing: true,
        // error: null
        error: false
      };
    }
    case "ACTION_FULFILLED": {
      return {
        ...state,
        processing: false,
        // data: action.payload.data.result,
        data: action.payload.text,
        // error: null
        error: false
      };
    }
    case "ACTION_REJECTED": {
      return {
        ...state,
        processing: false,
        // error: action.payload
        error: true
      };
    }
    default:
      return state;
  }
}
