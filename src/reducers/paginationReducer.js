import constants from "../constants";

let defaultState = {
  currentPage: 1
};

export default  (state = defaultState, action) => {
  switch (action.type) {
    case constants.PAGINATION_NEXT_PAGE:
      return {
        ...state,
        currentPage: ++state.currentPage
      }

    default:
      return state;
  }

}
