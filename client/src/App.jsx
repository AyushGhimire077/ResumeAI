import React from 'react'
import ResumeGenerator from './pages/Resume'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Route, Routes , BrowserRouter as Router } from 'react-router-dom'
import DocsPage from './pages/Doces'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <hr className="my-2 border-gray-400 w-[80%] m-auto" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<ResumeGenerator />} />
          <Route path="/docs" element={<DocsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App