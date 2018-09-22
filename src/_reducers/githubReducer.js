export function githubReducer(
    state = {
      data: [],
    },
    action
  ) {
    switch (action.type) {
      case "GITHUB": {
        return {
          ...state,
          processing: false,
          data: action.githubData,
          error: false
        };
      }
      default:
        return state;
    }
  }
  