import {useState} from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import GeneralInfo from './components/GeneralInfo'
import EducationInfo from './components/EducationInfo'
import WorkExp from './components/WorkExp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <GeneralInfo />
    <EducationInfo />
    <WorkExp />
  </StrictMode>,
)
