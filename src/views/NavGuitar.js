import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Styles/Nav.module.scss';

import navHome from '../Images/feloniushome.png';
import navVideos from '../Images/feloniusVideos.png';
import navPresskit from '../Images/feloniusPresskit.png';
import navContactPhotos from '../Images/feloniusContact.png';
import navMusic from '../Images/feloniusMusic.png';
import navCalendar from '../Images/feloniusCalendar.png';

const NavGuitar = () => {
  return (
    <>
      <NavLink to='/videos' className={styles.dotButton} style={{top: '93px', left: '2.806122448979592%'}} activeClassName='active'><img src={navVideos} alt='felonius-videos' /></NavLink>
      <NavLink to='/calendar' className={styles.dotButton} style={{top: '99.5px', left: '8.3%'}} activeClassName='active'><img src={navCalendar} alt='felonius-calendar' /></NavLink>
      <NavLink to='/music' className={styles.dotButton} style={{top: '165px', left: '9.33673469387755%'}} activeClassName='active'><img src={navMusic} alt='felonius-music' /></NavLink>
      <NavLink to='/presskit' className={styles.dotButton} style={{top: '226px', left: '5%'}} activeClassName='active'><img src={navPresskit} alt='felonius-presskit' /></NavLink>
      <NavLink to='/contact' className={styles.dotButton} style={{top: '241.4px', left: '11.6%'}} activeClassName='active'><img src={navContactPhotos} alt='felonius-contact' /></NavLink>
      <NavLink to='/' className={styles.dotButton} style={{top: '725px', left: '18.5%'}} activeClassName='active'><img src={navHome} alt='felonius-home' /></NavLink>
    </>
  )
}
export default NavGuitar