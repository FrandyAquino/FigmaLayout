import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from '@pages/HomePage'
import CategoryPage from '@pages/CategoryPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CategoryPage" element={<CategoryPage />} />
      </Routes>
    </Router>
  )
}

export default App

