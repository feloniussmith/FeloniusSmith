import React, { useState } from 'react';
// import { MdPlayArrow, MdPause } from 'react-icons/md';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import AudioPlayer from './AudioPlayer';
import styles from '../Styles/Pages.module.scss';

const Player = ({ name, cover, songs }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(-1);
  const songList = songs || [];

  const currentSong = currentSongIndex >= 0 ? songList[currentSongIndex] : null;

  return (
    <div className={styles.first}>
      <div className={styles.second}>
        <div className={styles.audioPlayerHeader}>
          <img src={cover} className={styles.albumCover} alt={`${name} cover`} />
          <div className={styles.column}>
            <h1 className={styles.third}><b>{name}</b></h1>
            <h1 className={styles.thirdSub}>Felonius Smith</h1>
          </div>
        </div>
        <div className={styles.outerScrollableContainer}>
          <div className={styles.scrollableContainer}>
            <ul className={styles.twentytwo}>
              {songList.map((song, index) => (
                <li key={song.title} className={styles.fifth}>
                  <button
                    onClick={() => setCurrentSongIndex(index)}
                    className={currentSongIndex === index ? styles.fourthActive : styles.fourth}
                  >
                    <span className={styles.sixth}>
                      {index + 1 < 10 ? '0' + (index + 1) : index + 1}
                    </span>
                    <h2 className={styles.seventh}>{song.title}</h2>
                    {/* <span>
                      {index === currentSongIndex ? (
                        <FontAwesomeIcon icon={faPause} size="lg" />
                      ) : (
                        <FontAwesomeIcon icon={faPlay} size="lg" />
                      )}
                    </span> */}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div class={styles.gradientCover}></div>
        </div>
      </div>
      <div className={styles.eighth}>
        <AudioPlayer
          key={currentSongIndex}
          currentSong={currentSong}
          songCount={songList.length}
          songIndex={currentSongIndex}
          onNext={() => setCurrentSongIndex((i) => i + 1)}
          onPrev={() => setCurrentSongIndex((i) => i - 1)}
        />
      </div>
    </div>
  );
};

export default Player;
