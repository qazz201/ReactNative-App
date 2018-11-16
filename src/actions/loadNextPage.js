import fetchData from "./fetchData"

export default (currentPage = 1) => {
  fetchData(null, currentPage)
}
