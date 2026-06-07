import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import AuthPage from './pages/AuthPage'
import Dashboard from './pages/Dashboard'
import UploadPage from './pages/UploadPage'
import DocumentViewer from './pages/DocumentViewer'
import Header from './components/Header'

function App(){
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AuthPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/upload" element={<UploadPage/>} />
        <Route path="/documents/:id" element={<DocumentViewer/>} />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
