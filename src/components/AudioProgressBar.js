import React from 'react';
import styles from '../Styles/Pages.module.scss';

function AudioProgressBar({ duration, currentProgress, buffered, ...rest }) {
  const progressBarWidth = isNaN(currentProgress / duration) ? 0 : currentProgress / duration;
  const bufferedWidth = isNaN(buffered / duration) ? 0 : buffered / duration;

  const progressStyles = {
    '--progress-width': progressBarWidth,
    '--buffered-width': bufferedWidth,
  };

  return (
    <div className={styles.ninth}>
      <input
        type="range"
        name="progress"
        className={styles.tenth}
        style={progressStyles}
        min={0}
        max={duration}
        value={currentProgress}
        {...rest}
      />
    </div>
  );
}

export default AudioProgressBar;
