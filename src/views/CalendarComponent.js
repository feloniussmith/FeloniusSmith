import React from 'react'
import styles from '../Styles/Pages.module.scss'

export default function CalendarComponent({ fields }) {
  const { title } = fields
  return (
    <div className={styles.componentContainer}>
      <div style={{fontSize: 200, color: 'white', zIndex: 9999}}>
        {title}
      </div>
    </div>
  )
}
