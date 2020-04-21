import React from 'react'
import ReactDOM from 'react-dom'
import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'
import { BrowserRouter } from "react-router-dom"
import { AnalyticsProvider } from 'use-analytics'
import App from './App'
import './index.css'

// Custom inline analytics plugin
const myPlugin = {
  name: 'my-custom-plugin',
  page: ({ payload }) => {
    console.log('page view fired', payload)
  },
  track: ({ payload }) => {
    console.log('track event payload', payload)
  }
}

const analytics = Analytics({
  app: 'awesome',
  plugins: [
    myPlugin,
    googleAnalytics({
      trackingId: '123-xyz'
    })
  ]
})

ReactDOM.render((
<AnalyticsProvider instance={analytics}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</AnalyticsProvider>
), document.getElementById('root'))