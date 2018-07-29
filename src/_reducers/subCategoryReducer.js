// export function subCategoryReducer (state = {
//     processing: false,
//     data: null,
//     error: false
// }, action) {
//     switch (action.type) {
//       case 'SUBCATEGORY':
//         return {
//           result: action.subCategory,
//        }
//       case 'SUBCATEGORY_PENDING':
//             // if request is in process.
//         return {
//           ...state,
//             processing: true
//       }
//       case 'SUBCATEGORY_FULFILLED':
//             // if request is fulfilled.
//         return {
//           ...state,
//             processing: false,
//             data: action.subCategory,
//       }
            
//       case 'SUBCATEGORY_REJECTED':
//             // if request is rejected.
//         return {
//           ...state,
//             processing: false,
//             error: true
//       }
//     }
//     return state;
//   }
  export function subCategoryReducer(
    state = {
      processing: false,
      subCategory: null,
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
          subCategory: action.subCategory,
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
  