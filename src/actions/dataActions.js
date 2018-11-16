import constants from "../constants";

export var dataIsLoading = bool => {
  return {
    type: constants.DATA_IS_LOADING,
    isLoading: bool
  };
};

export var storeAddApiData = apiData => {
  return {
    type: constants.STORE_ADD_API_DATA,
    apiData
  };
};
export var dataHasErrorLoad = errorMsg => {
  return {
    type: constants.DATA_HAS_ERROR_LOAD,
    dataHasErrorLoad: errorMsg
  };
};
