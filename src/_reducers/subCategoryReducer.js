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
          error: false
        };
      }
      case "SUBCATEGORY_FULFILLED": {
        return {
          ...state,
          processing: false,
          data: action.subCategory,
          error: false
        };
      }
      case "SUBCATEGORY_REJECTED": {
        return {
          ...state,
          processing: false,
          error: true
        };
      }
      default:
        return state;
    }
  }
  