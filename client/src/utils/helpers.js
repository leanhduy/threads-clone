import { toast } from 'react-toastify'

// * Perform a case-insensitive search for `searchStr` in `str`
export const searchString = (str, searchStr) => {
    return str.toLowerCase().includes(searchStr.toLowerCase())
}

// * Generate a random id text contain 10 characters
export const generateUniqueID = () => {
    return Math.random().toString(16).slice(2, 12)
}

// * Display a toastr indicate that post is creating
export const createPostToastr = (icon) => {
    toast('Creating post...', {
        icon: icon,
        position: 'bottom-center',
        autoClose: false,
        theme: 'light',
    })
}
