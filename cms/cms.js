import React from 'react'

import '../src/globalStyles.css'
import data from '../src/data.json'

import HomeComponent from '../src/views/HomeComponent'
import ContactComponent from '../src/views/ContactComponent'
import PressKitComponent from '../src/views/PressKitComponent'
import CalendarComponent from '../src/views/CalendarComponent'
import MusicComponent from '../src/views/MusicComponent'
import VideosComponent from '../src/views/VideosComponent'
// import NavGuitar from '../src/views/NavGuitar'

console.log('React version', React.version)

const CMS = window.CMS
CMS.registerPreviewStyle(
  'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css'
)
CMS.registerPreviewStyle('/admin/cms.bundle.css')

const getDocument = (collection, name) =>
  data[collection] && data[collection].filter(page => page.name === name)[0]
const getDocuments = (collection, name) => data[collection]

// const globalSettings = getDocument('settings', 'global')
const posts = getDocuments('posts')

// Preview Templates
CMS.registerPreviewTemplate('home', ({ entry }) => (
  <HomeComponent fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('videos', ({ entry }) => (
  <VideosComponent fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('calendar', ({ entry }) => (
  <CalendarComponent fields={entry.toJS().data} posts={posts} />
))
CMS.registerPreviewTemplate('music', ({ entry }) => (
  <MusicComponent fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('presskit', ({ entry }) => (
  <PressKitComponent fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('contact', ({ entry }) => (
  <ContactComponent fields={entry.toJS().data} />  //siteTitle={globalSettings.siteTitle}
))

// Return to home when user logging out
window.netlifyIdentity.on('logout', function () {
  document.location.href = '/'
})

// Log netlifySiteURL if editing on localhost
if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  console.log(
    `%cnetlifySiteURL: ${window.localStorage.getItem('netlifySiteURL')}`,
    'color: hotpink; font-size: 15px'
  )
}
