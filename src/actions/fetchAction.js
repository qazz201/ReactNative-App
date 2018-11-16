import * as actionType from "./dataActions";

var api = {
  URL: "https://api.unsplash.com/photos/?page=1",
  id:
    "Client-ID cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0"
};

var requestProps = {
  method: "GET",
  headers: {
    Authorization: api.id
  }
};

export var fetchData = (dataURL = api.URL) => async dispatch => {
  try {
    dispatch(actionType.dataIsLoading(true));

    var body = await fetch(dataURL, requestProps);
    var data = await body.json();

    dispatch(actionType.storeAddApiData(data));
    dispatch(actionType.dataIsLoading(false));
  } catch (error) {
    throw new Error`${error.message}`;
  }
};
