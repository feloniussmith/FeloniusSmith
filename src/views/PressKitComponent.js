import React from 'react'
import ReactMarkdown from 'react-markdown';
import styles from '../Styles/Presskit.module.scss'
import VenueItem from '../components/venueItem';

const PresskitComponent = ({ fields }) => {
  const { 
    title, 
    body,
    electronicPressKitText,
    downloadPressKitLink,
    subDownloadPressKitLink,
    presskitItems,
    performanceVenues
  } = fields
   console.log(performanceVenues)
  return (
    <div className={styles.masterDiv}>
      <div classname={styles.mainText}>
        <h1>{title}</h1>
      </div>
      <ReactMarkdown>
        {body}
      </ReactMarkdown>
      <h2>{electronicPressKitText}</h2>
      <p>{downloadPressKitLink}</p>
      <p>{subDownloadPressKitLink}</p>
      <div className={styles.itemContainer}>
        {presskitItems.map((item, index) => (
          <div>
            <p className={styles.pressKitItem}>{item.text}</p>
          </div>
        )
        )} 
      </div>
      <h2>Performance Venues</h2>
      <div>
        <b>Fairs & Festivals</b>
        <div className={styles.itemContainer}>
          {performanceVenues['FairsFestivals'].map((item, index) => (
          <VenueItem key={index} venue={item.venue} location={item.location}/>
          ))}
        </div>
      </div>
      <div>
        <b>Nightclubs/Cafes</b>
        <div className={styles.itemContainer}>
          {performanceVenues['NightclubsCafes'].map((item, index) => (
            <VenueItem key={index} venue={item.venue} location={item.location}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PresskitComponent