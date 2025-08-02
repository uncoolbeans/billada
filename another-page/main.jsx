import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ViewPics from './ViewPics'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ViewPics />
  </StrictMode>,
)