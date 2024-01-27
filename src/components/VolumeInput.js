import React from 'react';
import styles from '../Styles/Pages.module.scss';

function VolumeInput({ volume, onVolumeChange }) {
  return (
    <input
      aria-label="volume"
      name="volume"
      type="range"
      min={0}
      step={0.05}
      max={1}
      value={volume}
      className={styles.eleventh}
      onChange={(e) => {
        onVolumeChange(e.currentTarget.valueAsNumber);
      }}
    />
  );
}

export default VolumeInput;
