import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from 'components/navigation/Header'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
