import React from 'react'
import ReactMarkdown from 'react-markdown';
import styles from '../Styles/Presskit.module.scss'
import VenueItem from '../components/venueItem';
import MarkdownComponent from '../components/MarkdownComponent';
const PresskitComponent = ({ fields }) => {
  const { 
    title, 
    body,
    ElectronicPressKitText,
    downloadPressKit,
    SubDownloadPressKitLink,
    presskitItems,
    performanceVenues
  } = fields
  return (
    <div className={styles.masterDiv}>
      <div>
        <h1>{title}</h1>
      </div>
      <MarkdownComponent text={body} />
      <h2>{ElectronicPressKitText}</h2>
      <a className={styles.downloadPresskitStyle} href={downloadPressKit.DownloadPressKitLink}>{downloadPressKit.DownloadPressKitText}</a>
      <p>{SubDownloadPressKitLink}</p>
      <div className={styles.itemContainer}>
        {presskitItems.map((item, index) => (
          <div>
            <a key={index} href={item.pressKitItemFile} className={styles.presskitItem}>{item.text}</a>
          </div>
        )
        )} 
      </div>
      <h2>Performance Venues</h2>
      <div>
        <b><i>Fairs & Festivals</i></b>
        <div className={styles.itemContainer}>
          {performanceVenues['FairsFestivals'].map((item, index) => (
          <VenueItem key={index} venue={item.venue} location={item.location}/>
          ))}
        </div>
      </div>
      <div>
        <b><i>Nightclubs/Cafes</i></b>
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