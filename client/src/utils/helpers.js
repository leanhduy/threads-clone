// Perform a case-insensitive search for `searchStr` in `str`
export const searchString = (str, searchStr) => {
    return str.toLowerCase().includes(searchStr.toLowerCase())
}
