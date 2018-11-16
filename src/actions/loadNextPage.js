import constants from "../constants";
import fetchData from "./fetchData"


export default () => dispatch=> {
 dispatch({type:constants.PAGINATION_NEXT_PAGE})
  //  return fetchData(null, currentPage)
}
