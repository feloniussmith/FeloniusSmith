import React from 'react';
import styles from '../Styles/Home.module.scss';
import IMG from '../Images/jeffSmith.png';

const HomeComponent = ({ fields }) => {
  const { text1, review, musictext, musicsubtext, embed } = fields;

  return (
    <>
    <div className={styles.mainText}>
      <h1>{text1}</h1>
    </div>
    <div className={styles.homeContainer}>

      <div className={styles.review}>
        <img className={styles.mainImage} src={IMG} alt="Jeff Smith" />
        <div className={styles.reviewText}>
          {review.text}
        </div>
        <div className={styles.reviewAuthor}>
          {review.author}
        </div>
      </div>

      <div className={styles.musicInfo}>
        <div className={styles.musicText}>
          {musictext}
        </div>
        <div className={styles.musicSubtext}>
          {musicsubtext}
        </div>
      </div>

      <iframe className={styles.media} allow="autoplay *; encrypted-media *;" frameborder="0" height="450" title="music" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src={embed}></iframe>

    </div>
    </>
  );
}

export default HomeComponent;