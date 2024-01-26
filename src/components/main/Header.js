import React from 'react'
// import styles from '../Styles/Home.module.scss'
import Logo from '../../Images/feloniusSmith.png'
import styles from '../../Styles/Pages.module.scss'

import MobileMenu from '../MobileMenu'

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={Logo} alt="Logo" className={styles.logo}></img>
      <MobileMenu />
    </div>
  )
}

export default Header