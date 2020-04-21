import React, { useEffect } from "react"
import { Routes, Route, Link, useLocation } from "react-router-dom"
import Home from './pages/Home'
import Shoes from './pages/Shoes'
import ShoePage from './pages/ShoePage'
import NotFound from './pages/NotFound'
import { useAnalytics } from 'use-analytics'

export default function App() {
  let location = useLocation()
  const analytics = useAnalytics()

  // When location changes in app send page view
  useEffect(() => {
    analytics.page()
  }, [location])

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shoes">Shoes</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/shoes/:slug" element={<ShoePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
