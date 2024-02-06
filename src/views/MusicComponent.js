import React from 'react'
import styles from '../Styles/Pages.module.scss'
import ReactMarkdown from 'react-markdown';
import Player from '../components/Player';

const MusicComponent = ({ fields }) => {
  const { title, body, music } = fields
  
  
  const MusicList = (musicList) => {
    return (
      musicList.map((music, index) => {
        //const songs = music.playlist.songs.map((song) => ({title: song.title, source: song.source}))
        return (
          <div key={index} className={styles.musicListWrapper}>
            <h1 className={styles.title}>{music.title}</h1>
            <Player name={music.name} cover={music.albumcover} songs={music.songs} />
            {/*<iframe className={styles.media} allow="autoplay *; encrypted-media *;" frameborder="0" height="450" title="music" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src={music.embed}></iframe>*/}
            <div className={styles.text}>
              <ReactMarkdown>
                {music.body}
              </ReactMarkdown>
            </div>
            <div className={styles.text}>
              <ReactMarkdown>
                {music.reviews}
              </ReactMarkdown>
            </div>
          </div>
        );
      })
    )
  }

  return (
    <>
      <div className={styles.calendar}>
        <div className={styles.calendarHeader}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}><ReactMarkdown>{body}</ReactMarkdown></p>
        </div>
      </div>
      {MusicList(music)}
      {/* <MusicPlayer /> */}
    </>
  )
}

export default MusicComponent