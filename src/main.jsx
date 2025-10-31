import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import GeneralInfo from './components/GeneralInfo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <GeneralInfo />
  </StrictMode>,
)
