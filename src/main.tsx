import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import DashboardPage from './pages/home/DashboardPage.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
