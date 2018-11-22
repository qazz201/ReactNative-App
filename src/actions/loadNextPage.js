import constants from "../constants";
import fetchData from "./fetchData"


export default (calbackFunctionFetch, currentPage) => dispatch => {
  dispatch({
    type: constants.PAGINATION_NEXT_PAGE
  });
  calbackFunctionFetch(undefined, ++currentPage) //fetchData(link,page) in my case
}
