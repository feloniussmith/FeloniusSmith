import React from 'react'
import styles from '../Styles/Pages.module.scss'
import ReactMarkdown from 'react-markdown';
import img from '../Images/jeffSmith1.png';
import img2 from '../Images/feloniusSmith.png';

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

          <div className={styles.gallery}>
            <div className={styles.photo}>
              <img src={img} alt=''/>
            </div>


          </div>
        </p>
      </div>
    </div>
  )
}

export default ContactComponent