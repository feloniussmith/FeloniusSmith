import React from 'react'
import styles from '../Styles/Pages.module.scss'

const CalendarComponent = ({ fields, musicList = [] }) => {
  // const { title, description } = fields

  const MusicList = (musicList) => {
    return (
      musicList.map((music, index) => {
        return (
          <div className={styles.music}>
            <h1 className={styles.title}>{music.title}</h1>
            <iframe className={styles.media} allow="autoplay *; encrypted-media *;" frameborder="0" height="450" title="music" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src={music.embed}></iframe>
            <p className={styles.text}>{music.description}</p>
          </div>
        );
      })
    )
  }
  return (
    <>
      {MusicList(musicList)}
    </>
  )
}

export default CalendarComponent