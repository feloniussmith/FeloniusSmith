import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'

import ScrollToTop from './components/ScrollToTop'
import Meta from './components/Meta'
import NavGuitar from './views/NavGuitar'
// import About from './views/About'
// import Contact from './views/Contact'
import NoMatch from './views/NoMatch'

import VideosComponent from './views/VideosComponent';
import MusicComponent from './views/MusicComponent';
import HomeComponent from './views/HomeComponent';
import CalendarComponent from './views/CalendarComponent';
import PressKitComponent from './views/PressKitComponent';
import ContactComponent from './views/ContactComponent';

// import Nav from './components/Nav'
import data from './data.json'
// import { getCollectionTerms } from './util/collection'

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

    // const posts = this.getDocuments('posts').filter(
    //   post => post.status !== 'Draft'
    // )
    // const categoriesFromPosts = getCollectionTerms(posts, 'categories')
    // const postCategories = this.getDocuments('postCategories').filter(
    //   category => categoriesFromPosts.indexOf(category.name.toLowerCase()) >= 0
    // )

    return (
      <Router>
        <div className='React-Wrap'>
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

          <Switch>
            <RouteWithMeta
              path='/'
              exact
              component={(props) => (
                <NavGuitar>
                  <HomeComponent {...props} />
                </NavGuitar>
              )}
              description={siteDescription}
              fields={this.getDocument('pages', 'home')}
            />
            <RouteWithMeta
              path='/videos/'
              exact
              component={VideosComponent}
              fields={this.getDocument('pages', 'contact')}
              siteTitle={siteTitle}
            />
            <RouteWithMeta
              path='/calendar'
              exact
              component={(props) => (
                <NavGuitar>
                  <CalendarComponent {...props} />
                </NavGuitar>
              )}
              description={siteDescription}
              fields={this.getDocument('pages', 'calendar')}
            />
            <RouteWithMeta
              path='/music/'
              exact
              component={MusicComponent}
              fields={this.getDocument('pages', 'about')}
            />
            <RouteWithMeta
              path='/presskit/'
              exact
              component={PressKitComponent}
              fields={this.getDocument('pages', 'contact')}
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

          {/* <NavGuitar/> */}
        </div>
      </Router>
    )
  }
}

export default App
