import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import bg from '../Images/bg.jpg';
import styles from '../Styles/Home.module.scss'

export default function NavGuitar({ children }) {
  return (
    <div className={styles.container}>
      {/* <div className={styles.imageWrapper}> */}
          {/* <img src={bg} alt="guitar" className={styles.bgImg} /> */}
          <NavLink to='/videos' className={styles.dotButton} style={{top: '9.3%', left: '2.806122448979592%'}} activeClassName={styles.active}></NavLink>
          <NavLink to='/calendar' className={styles.dotButton} style={{top: '7.6%', left: '13.316326530612244%'}} activeClassName={styles.active}></NavLink>
          <NavLink to='/music' className={styles.dotButton} style={{top: '15.8%', left: '9.33673469387755%'}} activeClassName={styles.active}></NavLink>
          <NavLink to='/presskit' className={styles.dotButton} style={{top: '22.9%', left: '4.948979591836735%'}} activeClassName={styles.active}></NavLink>
          <NavLink to='/contact' className={styles.dotButton} style={{top: '21.1%', left: '15.96938775510204%'}} activeClassName={styles.active}></NavLink>
      {/* </div> */}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
