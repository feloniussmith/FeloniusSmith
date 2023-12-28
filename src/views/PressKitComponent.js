import React from 'react'
import ReactMarkdown from 'react-markdown';
import styles from '../Styles/Presskit.module.scss'
import VenueItem from '../components/venueItem';

const PresskitComponent = ({ fields }) => {
  const { 
    title, 
    Body,
    ElectronicPressKitText,
    DownloadPressKitLink,
    SubDownloadPressKitLink,
    presskitItems,
    performanceVenues
  } = fields
  console.log(performanceVenues['Nightclubs/Cafes'])
  return (
    <div className={styles.masterDiv}>
      <div classname={styles.mainText}>
        <h1>{title}</h1>
      </div>
      <ReactMarkdown>
        {Body}
      </ReactMarkdown>
      <h2>{ElectronicPressKitText}</h2>
      <p>{DownloadPressKitLink}</p>
      <p>{SubDownloadPressKitLink}</p>
      <div className={styles.itemContainer}>
        {presskitItems.map((item, index) => (
          <div>
            <p className={styles.presskitItem}>{item.text}</p>
          </div>
        )
        )}
      </div>
      <h2>Performance Venues</h2>
      <div>
        <b>Fairs & Festivals</b>
        <div className={styles.itemContainer}>
          {performanceVenues['Nightclubs/Cafes'].map((item, index) => (
          <VenueItem key={index} venue={item.venue} location={item.location}/>
          ))}
        </div>
      </div>
      <div>
        <b>Nightclubs/Cafes</b>
        <div className={styles.itemContainer}>
          {performanceVenues['Nightclubs/Cafes'].map((item, index) => (
            <VenueItem key={index} venue={item.venue} location={item.location}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PresskitComponent