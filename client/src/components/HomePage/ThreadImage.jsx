import { Box } from '@mui/material'
import styles from '../../styles/newdialog.module.css'
import { useState } from 'react'
import UpdateImageAltDialog from './UpdateImageAltDialog'

const ThreadImage = ({ imageProp, remove }) => {
    const [image, setImage] = useState(imageProp)
    const [isUpdateAlt, setIsUpdateAlt] = useState(false)

    return (
        <>
            <Box className={styles.singleImg__container}>
                <Box
                    className={`${styles.btn} ${styles.topBtn}`}
                    onClick={() => {
                        remove(image.id)
                    }}
                >
                    X
                </Box>
                <figure>
                    <img
                        className={styles.singleImg__image}
                        alt={image.alt}
                        src={image.url}
                        loading="lazy"
                    />
                    <figcaption className={styles.singleImg__caption}>
                        {image.alt}
                    </figcaption>
                </figure>
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
                isUpdateAlt={isUpdateAlt}
                setIsUpdateAlt={setIsUpdateAlt}
                image={image}
                setImage={setImage}
            />
        </>
    )
}

export default ThreadImage
