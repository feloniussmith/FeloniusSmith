import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Styles/Nav.module.scss';

import navHome from '../Images/feloniushome.png';
import navVideos from '../Images/feloniusVideos.png';
import navPresskit from '../Images/feloniusPresskit.png';
import navContactPhotos from '../Images/feloniusContact.png';
import navMusic from '../Images/feloniusMusic.png';
import navCalendar from '../Images/feloniusCalendar.png';

import navVideosActive from '../Images/feloniusVideosActive.png';
import navPresskitActive from '../Images/feloniusPresskitActive.png';
import navContactPhotosActive from '../Images/feloniusContactActive.png';
import navMusicActive from '../Images/feloniusMusicActive.png';
import navCalendarActive from '../Images/feloniusCalendarActive.png';

const NavGuitar = () => {
  return (
    <>
      <NavLink to='/videos' className={styles.dotButton} style={{top: '90px', left: '2.806122448979592%'}} activeClassName='active'>
        <img src={navVideos} alt='felonius-videos' className={styles.defaultImage} />
        <img src={navVideosActive} alt='felonius-videos-active' className={styles.hoverImage} />
      </NavLink>

      <NavLink to='/calendar' className={styles.dotButton} style={{top: '95px', left: '8.29%'}} activeClassName='active'>
        <img src={navCalendar} alt='felonius-calendar' className={styles.defaultImage} />
        <img src={navCalendarActive} alt='felonius-calendar-active' className={styles.hoverImage} />
      </NavLink>

      <NavLink to='/music' className={styles.dotButton} style={{top: '161px', left: '9.4%'}} activeClassName='active'>
        <img src={navMusic} alt='felonius-music' className={styles.defaultImage}/>
        <img src={navMusicActive} alt='felonius-music-active' className={styles.hoverImage}/>
      </NavLink>

      <NavLink to='/presskit' className={styles.dotButton} style={{top: '222px', left: '5%'}} activeClassName='active'>
        <img src={navPresskit} alt='felonius-presskit' className={styles.defaultImage}/>
        <img src={navPresskitActive} alt='felonius-presskit-active' className={styles.hoverImage}/>
        </NavLink>

      <NavLink to='/contact' className={styles.dotButton} style={{top: '236.8px', left: '11.7%'}} activeClassName='active'>
        <img src={navContactPhotos} alt='felonius-contact' className={styles.defaultImage}/>
        <img src={navContactPhotosActive} alt='felonius-contact-active' className={styles.hoverImage}/>
      </NavLink>
      
      <NavLink to='/' className={styles.dotButton} style={{top: '725px', left: '18%'}} activeClassName='active'>
        <img src={navHome} alt='felonius-home' />
      </NavLink>
    </>
  )
}
export default NavGuitar