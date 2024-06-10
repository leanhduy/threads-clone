// * Perform a case-insensitive search for `searchStr` in `str`
const searchString = (str, searchStr) => {
  return str.toLowerCase().includes(searchStr.toLowerCase())
}

module.exports = { searchString }
