import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import logo from './Images/Logo.svg'

document.title = 'CreovueCrafts'
document.querySelector('link[rel="icon"]')?.setAttribute('href', logo)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
