import React from 'react'
import styles from '../Styles/Pages.module.scss'

const CalendarComponent = ({ fields }) => {
  const { title } = fields
  return (
    <div>
      {title}
    </div>
  )
}

export default CalendarComponent