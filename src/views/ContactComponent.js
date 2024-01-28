import React from 'react'
import styles from '../Styles/Pages.module.scss'
import ReactMarkdown from 'react-markdown';

const ContactComponent = ({ fields }) => {
  const { title, description, images, dividetext, images2 } = fields

  const formattedImages = images.map((image, index) => (
    <div className={styles.photo}>
      <a href={image.image}><img src={image.image} alt={image.description} data-echo={image.image} key={index} /></a>
    </div>
  ))
  const formattedImages2 = images2.map((image, index) => (
    <div className={styles.photo}>
      <a href={image.image}><img src={image.image} alt={image.description} data-echo={image.image} key={index} /></a>
    </div>
  ))
  return (
    <div className={styles.contact}>
      <div className={styles.contactHeader}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>
          <ReactMarkdown>
            {description}
          </ReactMarkdown>

          {/* <div className={styles.gallery}>
            {formattedImages}
          </div>
          <h2 className={styles.photoDivideText}>Photo Archives... Previous Members</h2>
          <div className={styles.photoDivide}/>
          <div className={styles.gallery}>
            {formattedImages}
          </div> */}
        </p>
      </div>
      <div className={styles.gallery}>
            {formattedImages}
          </div>
          <h2 className={styles.photoDivideText}>{dividetext}</h2>
          <div className={styles.photoDivide}/>
          <div className={styles.gallery}>
            {formattedImages2}
          </div>
    </div>
  )
}

export default ContactComponent