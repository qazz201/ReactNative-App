import constants from "../constants";

let defaultState = {
  dataIsLoading: true,
  fetchedApiData: []
}

export default (state=defaultState,action)=>{
  switch (action.type) {
      case constants.DATA_IS_LOADING:
        return {
          ...state,
          dataIsLoading: action.isLoading
        };

      case constants.STORE_ADD_API_DATA:
        return {
          ...state,
          fetchedApiData: [...state.fetchedApiData, ...action.fetchedApiData]
          /*authorsName: action.authorsName,
          authorsImg: action.authorsImg*/
        };
      default:
        return state;
    }

}
