import React from 'react'
import styles from '../Styles/Pages.module.scss'
import ReactMarkdown from 'react-markdown';

const ContactComponent = ({ fields }) => {
  const { title, description, images } = fields

  const formattedImages = images.map((image, index) => (
    <div className={styles.photo}>
      <a href={image.image}><img src={image.image} alt={image.description} data-echo={image.image} key={index} /></a>
    </div>
  ))
  return (
    <div className={styles.videos}>
      <div className={styles.videosHeader}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>
          <ReactMarkdown>
            {description}
          </ReactMarkdown>

          <div className={styles.gallery}>
            {formattedImages}
          </div>
        </p>
      </div>
    </div>
  )
}

export default ContactComponent