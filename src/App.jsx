import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components"
import { Home, Store } from "./pages"
import './App.css'
import { useState } from "react"
const App = () => {

  const [qFont, setQFont] = useState('font-tajawal')

  return (
    <div className="font-tajawal">
      <Navbar setQFont={setQFont} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home qFont={qFont} />} />
          <Route path="/store" element={<Store qFont={qFont} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App