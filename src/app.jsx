import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Account from './pages/Account'

function App() {
  return (
    <div className="min-h-screen bg-[#ffffff] flex items-center justify-center">
      <div className="mobile-container">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </div>
  )
}

export default App