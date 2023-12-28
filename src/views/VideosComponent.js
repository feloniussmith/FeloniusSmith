import React from 'react'
import styles from '../Styles/Pages.module.scss'

const VideosComponent = ({ fields, videos = [], }) => {
  const { title, description } = fields

  const Videos = (videos) => {
    return (
      videos.map((video, index) => {
        return (
          <div className={styles.videoContainer} key={index}>
            <h1 className={styles.title}>{video.title}</h1>
            <iframe className={styles.video} title={video.title} width="560" height="315" src={video.link} frameborder="0" gesture="media" allowfullscreen></iframe>
          </div>
        );
      })
    )
  }

  return (
    <div className={styles.videos}>
      <div className={styles.videosHeader}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      {Videos(videos)}
    </div>
  )
}

export default VideosComponent