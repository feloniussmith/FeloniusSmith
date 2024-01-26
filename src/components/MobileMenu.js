import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import stylesimport from '../Styles/Pages.module.scss'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        right: '36px',
        top: '36px',
    },
    bmBurgerBars: {
        background: '#073E6D'
    },
    bmCrossButton: {
        height: '32px',
        width: '32px'
    },
    bmCross: {
        background: '#073E6D'
    },
    bmMenu: {
        background: '#F0F8FF',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0)',
    }
  }

  const handleLinkClick = () => {
    console.log(isOpen)
    console.log('click');
    setIsOpen(false);
    console.log(isOpen)
  }

  const handleStateChange = (state) => {
    setIsOpen(state.isOpen);
  }

  return (
    <div className={stylesimport.mobileMenu}>
    <Menu right styles={styles} isOpen={isOpen} onStateChange={(state) => handleStateChange(state)}>
      <NavLink to='/' className={stylesimport.menuItem} onClick={() => handleLinkClick()}> Home </NavLink>
      <NavLink to='/videos' className={stylesimport.menuItem} onClick={() => handleLinkClick()}> Videos </NavLink>
      <NavLink to='/calendar' className={stylesimport.menuItem} onClick={() => handleLinkClick()}> Calendar </NavLink>
      <NavLink to='/music' className={stylesimport.menuItem} onClick={() => handleLinkClick()}> Music </NavLink>
      <NavLink to='/presskit' className={stylesimport.menuItem} onClick={() => handleLinkClick()}> Presskit </NavLink>
      <NavLink to='/contact' className={stylesimport.menuItem} onClick={() => handleLinkClick()}> Contact & Photos </NavLink>
    </Menu>
    </div>
  )
}

export default MobileMenu;
