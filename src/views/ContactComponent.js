import React from 'react'
import styles from '../Styles/Pages.module.scss'
import ReactMarkdown from 'react-markdown';

const ContactComponent = ({ fields }) => {
  const { title, description } = fields

  return (
    <div className={styles.videos}>
      <div className={styles.videosHeader}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>
          <ReactMarkdown>
            {description}
          </ReactMarkdown>
        </p>
      </div>
    </div>
  )
}

export default ContactComponent