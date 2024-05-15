import { Box } from '@mui/material'
import styles from '../../styles/newdialog.module.css'
import { useState } from 'react'
import UpdateImageAltDialog from './UpdateImageAltDialog'

const ThreadImage = ({ imageProp, remove }) => {
    const [image, setImage] = useState(imageProp)
    const [isUpdateAlt, setIsUpdateAlt] = useState(false)
    return (
        <>
            <Box className={styles.imagelist__container}>
                <Box
                    className={`${styles.btn} ${styles.topBtn}`}
                    onClick={() => {
                        remove(image.id)
                    }}
                >
                    X
                </Box>
                <img
                    className={styles.imagelist__image}
                    alt={image.alt}
                    src={image.url}
                    loading="lazy"
                />
                <Box
                    className={`${styles.btn} ${styles.bottomBtn}`}
                    onClick={() => {
                        setIsUpdateAlt(true)
                    }}
                >
                    Alt
                </Box>
            </Box>
            {/* Update Image alt text dialog */}
            <UpdateImageAltDialog
                open={isUpdateAlt}
                setOpen={setIsUpdateAlt}
                setImage={setImage}
            />
        </>
    )
}

export default ThreadImage
