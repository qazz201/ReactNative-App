import constants from "../constants";
import fetchData from "./fetchData"


export default (calbackFunctionFetch) => dispatch => {
  dispatch({
    type: constants.PAGINATION_NEXT_PAGE
  })
  calbackFunctionFetch(null) //fetchData(link,page) in my case
}
