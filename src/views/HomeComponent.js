import React from 'react'

const HomeComponent = ({ fields }) => {
  const { title } = fields
  return (
    <div>
      <div style={{fontSize: 200, color: 'blue', zIndex: 9999}}>
        {title}
      </div>
    </div>
  )
}

export default HomeComponent