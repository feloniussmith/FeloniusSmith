import React from 'react'
import styles from '../Styles/Pages.module.scss'

const VideosComponent = ({ fields }) => {
  const { title, body, videos } = fields

  const Videos = (videos) => {
    return (
      videos.map((video, index) => {
        return (
          <div className={styles.videoContainer} key={index}>
            <h1 className={styles.title}>{video.title}</h1>
            <iframe className={styles.video} title={video.title} src={video.link} frameborder="0" gesture="media" allowfullscreen></iframe>
          </div>
        );
      })
    )
  }

  return (
    <div className={styles.videos}>
      <div className={styles.videosHeader}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{body}</p>
      </div>
      {Videos(videos)}
    </div>
  )
}

export default VideosComponent