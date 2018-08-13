export function subCategoryReducer(
    state = {
      processing: false,
      data: null,
      error: null
    },
    action
  ) {
    switch (action.type) {
      case "SUBCATEGORY_PENDING": {
        return {
          ...state,
          processing: true,
          // error: null
          error: false
        };
      }
      case "SUBCATEGORY": {
        return {
          ...state,
          processing: false,
          // data: action.payload.data.result,
          // data: action.payload.text,
          data: action.subCategory,
          // error: null
          error: false
        };
      }
      case "SUBCATEGORY_REJECTED": {
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
  