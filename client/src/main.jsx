import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ResumeProvider } from './resumeContext/resumeContext.jsx'

createRoot(document.getElementById('root')).render(
  <ResumeProvider>
  <StrictMode>
    <App />
  </StrictMode>

  </ResumeProvider>
)
