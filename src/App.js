import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import styles from './Styles/App.module.scss'

import ScrollToTop from './components/ScrollToTop'
import Meta from './components/Meta'
import NavGuitar from './views/NavGuitar'
import NoMatch from './views/NoMatch'

import VideosComponent from './views/VideosComponent';
import MusicComponent from './views/MusicComponent';
import HomeComponent from './views/HomeComponent';
import CalendarComponent from './views/CalendarComponent';
import PressKitComponent from './views/PressKitComponent';
import ContactComponent from './views/ContactComponent';
import Header from './components/main/Header';

import data from './data.json'

const RouteWithMeta = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={routeProps => (
      <Fragment>
        <Meta {...props} />
        <Component {...routeProps} {...props} />
      </Fragment>
    )}
  />
)

class App extends Component {
  state = {
    data
  }

  getDocument = (collection, name) =>
    this.state.data[collection] &&
    this.state.data[collection].filter(page => page.name === name)[0]

  getDocuments = collection => this.state.data[collection] || []


  render () {
    const globalSettings = this.getDocument('settings', 'global')
    const {
      siteTitle,
      siteUrl,
      siteDescription,
      socialMediaCard,
      headerScripts
    } = globalSettings

    const events = this.getDocuments('events').filter(
      post => post.status !== 'Draft'
    )
    // const categoriesFromPosts = getCollectionTerms(posts, 'categories')
    // const postCategories = this.getDocuments('postCategories').filter(
    //   category => categoriesFromPosts.indexOf(category.name.toLowerCase()) >= 0
    // )

    return (
      <Router>
        <div className={styles.background}>
          <div className={styles.container}>
            <NavGuitar/>
            <ScrollToTop />
            <Helmet
              defaultTitle={siteTitle}
              titleTemplate={`${siteTitle} | %s`}
            />
            <Meta
              headerScripts={headerScripts}
              absoluteImageUrl={
                socialMediaCard &&
                socialMediaCard.image &&
                siteUrl + socialMediaCard.image
              }
              twitterCreatorAccount={
                socialMediaCard && socialMediaCard.twitterCreatorAccount
              }
              twitterSiteAccount={
                socialMediaCard && socialMediaCard.twitterSiteAccount
              }
            />
            <div className={styles.body}>
              <Header />
              <div className={styles.content}>
                <Switch>
                  <RouteWithMeta
                    path='/'
                    exact
                    component={(props) => (
                      <HomeComponent {...props} />
                    )}
                    description={siteDescription}
                    fields={this.getDocument('pages', 'home')}
                  />
                  <RouteWithMeta
                    path='/videos/'
                    exact
                    component={VideosComponent}
                    fields={this.getDocument('pages', 'videos')}
                    siteTitle={siteTitle}
                  />
                  <RouteWithMeta
                    path='/calendar'
                    exact
                    component={(props) => (
                      <CalendarComponent {...props} />
                    )}
                    description={siteDescription}
                    fields={this.getDocument('pages', 'calendar')}
                    events={events}
                  />
                  <RouteWithMeta
                    path='/music/'
                    exact
                    component={MusicComponent}
                    fields={this.getDocument('pages', 'music')}
                  />
                  <RouteWithMeta
                    path='/presskit/'
                    exact
                    component={PressKitComponent}
                    fields={this.getDocument('pages', 'presskit')}
                    siteTitle={siteTitle}
                  />
                  <RouteWithMeta
                    path='/contact/'
                    exact
                    component={ContactComponent}
                    fields={this.getDocument('pages', 'contact')}
                    siteTitle={siteTitle}
                  />

                  <Route render={() => <NoMatch siteUrl={siteUrl} />} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
