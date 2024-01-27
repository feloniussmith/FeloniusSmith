import React from 'react'
import styles from '../Styles/Pages.module.scss'
import VenueItem from '../components/venueItem';
import MarkdownComponent from '../components/MarkdownComponent';
const PresskitComponent = ({ fields }) => {
  const { 
    title, 
    body,
    ElectronicPressKitText,
    SubDownloadPressKitLink,
    presskitItems,
    performanceVenues
  } = fields
  return (
    <div className={styles.masterDiv}>
      <div>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <MarkdownComponent text={body}/>
      <h1 className={styles.title}>{ElectronicPressKitText}</h1>
      <p>{SubDownloadPressKitLink}</p>
      <div className={styles.electronicContainer}>
        {presskitItems.map((item, index) => (
          <div>
            <a key={index} href={item.pressKitItemFile} className={styles.presskitItem}>{item.text}</a>
          </div>
        )
        )} 
      </div>
      <h1 className={styles.title}>Performance Venues</h1>
      <div className={styles.gridsContainer}>
        <div className={styles.gridListContainer}>
          <b className={styles.btitle}>Fairs & Festivals</b>
          <div className={styles.itemContainer}>
            {performanceVenues['FairsFestivals'].map((item, index) => (
            <VenueItem key={index} venue={item.venue} location={item.location}/>
            ))}
          </div>
        </div>
        <div className={styles.gridListContainer}>
          <b className={styles.btitle}>Nightclubs/Cafes</b>
          <div className={styles.itemContainer}>
            {performanceVenues['NightclubsCafes'].map((item, index) => (
              <VenueItem key={index} venue={item.venue} location={item.location}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PresskitComponent