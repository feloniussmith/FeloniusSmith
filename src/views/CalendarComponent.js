import React from 'react'
import '../Styles/Pages.scss'

export default function CalendarComponent({ fields }) {
  const { title } = fields
  return (
    <div className='componentContainer'>
      <div style={{fontSize: 200, color: 'white', zIndex: 9999}}>
        {title}
      </div>
    </div>
  )
}
