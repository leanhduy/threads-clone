import { toast } from 'react-toastify'
import axios from 'axios'

export const userProfilePlaceHolder = '/images/placeholder_avatar.png'

// * Perform a case-insensitive search for `searchStr` in `str`
export const searchString = (str, searchStr) => {
    return str.toLowerCase().includes(searchStr.toLowerCase())
}

// * Generate a random id text contain 10 characters
export const generateUniqueID = () => {
    return Math.random().toString(16).slice(2, 12)
}

// * Display a toastr indicate that post is creating
export const createPostToast = (icon) => {
    toast('Creating post...', {
        icon: icon || '',
        position: 'bottom-center',
        autoClose: false,
        theme: 'colored',
    })
}

// * Display a success toast
export const toastSuccess = (msg) => {
    toast.success(msg, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
    })
}

export const toastError = (msg) => {
    toast.error(msg, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
    })
}

// * Remove toast
export const removeToast = () => {
    toast.dismiss()
}

// * Upload images to image hosting server (Cloudinary)
export const uploadImageToHostingServer = async (img) => {
    const endpoint = `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    }/image/upload`

    try {
        const formData = new FormData()
        formData.append('file', img.file)
        formData.append(
            'upload_preset',
            import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
        )
        formData.append(
            'cloud_name',
            import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
        )

        const response = await axios.post(endpoint, formData)

        return {
            ...img,
            url: response.data.url,
        }
    } catch (error) {
        throw new Error(
            'Something wrong when uploading image to host server. ',
            error.message
        )
    }
}
