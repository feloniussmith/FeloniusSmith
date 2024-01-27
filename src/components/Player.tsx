import React, { useState } from 'react';
import { MdPlayArrow, MdPause } from 'react-icons/md';
import AudioPlayer from './AudioPlayer.tsx';
import styles from '../Styles/Pages.module.scss';

import { songs } from './songs.ts';

const Player = ({ name, cover, songs }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(-1);

  const currentSong = songs[currentSongIndex];
  console.log(songs)

  return (
    <div className={styles.first}>
      <div className={styles.second}>
        <div className={styles.audioPlayerHeader}>
          <img src={cover} className={styles.albumCover}/>
          <div className={styles.column}>
            <h1 className={styles.third}><b>{name}</b></h1>
            <h1 className={styles.third}>Felonius Smith</h1>
          </div>
        </div>
        <div className={styles.scrollableContainer}>
        <ul className={styles.twentytwo}>
          {songs.map((song, index) => (
            <li key={song.title} className={styles.fifth}>
              <button
                onClick={() => setCurrentSongIndex(index)}
                className={currentSongIndex === index ? styles.fourthActive : styles.fourth}
              >
                <span className={styles.sixth}>
                  {index + 1 < 10 ? '0' + (index + 1) : index + 1}
                </span>
                <h2 className={styles.seventh}>{song.title}</h2>
                <span>
                  {index === currentSongIndex ? (
                    <MdPause size={20} />
                  ) : (
                    <MdPlayArrow size={20} />
                  )}
                </span>
              </button>
            </li>
          ))}
        </ul>
        </div>
      </div>
      <div className={styles.eighth}>
        <AudioPlayer
          key={currentSongIndex}
          currentSong={currentSong}
          songCount={songs.length}
          songIndex={currentSongIndex}
          onNext={() => setCurrentSongIndex((i) => i + 1)}
          onPrev={() => setCurrentSongIndex((i) => i - 1)}
        />
      </div>
    </div>
  )
}

export default Player;