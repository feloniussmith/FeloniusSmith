import React, {} from 'react';
import AudioPlayer from 'react-modern-audio-player';
import styles from '../../Styles/MusicPlayer.module.scss'

const MusicPlayer = ({playList}) => {

  return (
    <div className={styles.musicPlayerContainer}>
      <div className={styles.albumContainer}>
        <img src="https://cdn.pixabay.com/photo/2022/08/29/08/47/sky-7418364__340.jpg" alt="album cover" />
      </div> 
      <AudioPlayer 
        playList={playList}
        placement={{
          interface: {
            templateArea: {
              progress: "row1-2",
              playList: "row2-1",
              playButton: "row2-2",
              volume: "row2-3"
            }
          },
          playListPlacement: "bottom"
        }}
        activeUI={{
          playButton: true,
          progress: "bar",
          playList: "unSortable",
          prevNnext: true,
          volume: true,
        }}
        rootContainerProps={{
          colorScheme: "light",
          width: "300px",
        }}
      />
    </div>
  )
}

export default MusicPlayer