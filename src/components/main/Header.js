import React from 'react'
// import styles from '../Styles/Home.module.scss'
import Logo from '../../Images/feloniusSmith.png'
import styles from '../../Styles/Pages.module.scss'

const Header = () => {
  return (
    <div>
      <img src={Logo} alt="Logo" className={styles.logo}></img>
    </div>
  )
}

export default Header