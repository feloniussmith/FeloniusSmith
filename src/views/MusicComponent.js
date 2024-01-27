import React from 'react'
import styles from '../Styles/Pages.module.scss'
import ReactMarkdown from 'react-markdown';
import Player from '../components/Player.tsx';

const MusicComponent = ({ fields }) => {
  const { music } = fields
  
  const MusicList = (musicList) => {
    return (
      musicList.map((music, index) => {
        //const songs = music.playlist.songs.map((song) => ({title: song.title, source: song.source}))
        return (
          <div key={index}>
            <h1 className={styles.title}>{music.title}</h1>
            <Player name={'Bucking The Blues'} cover={'./feloni.jpg'} songs={[{title: 'Big Road Blues', src:'./big-road-blues-1-.mp3'},{title: 'Big Road Blues', src:'./big-road-blues-1-.mp3'},{title: 'Big Road Blues', src:'./big-road-blues-1-.mp3'},{title: 'Big Road Blues', src:'./big-road-blues-1-.mp3'},{title: 'Big Road Blues', src:'./big-road-blues-1-.mp3'},{title: 'Big Road Blues', src:'./big-road-blues-1-.mp3'},{title: 'Big Road Blues', src:'./big-road-blues-1-.mp3'}, ]} />
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
      {MusicList(music)}
      {/* <MusicPlayer /> */}
    </>
  )
}

export default MusicComponent