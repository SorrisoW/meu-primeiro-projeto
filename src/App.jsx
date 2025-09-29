import { Hello } from "./components/Hello"
import { Card } from "./components/Card"
import { useState } from "react"
import { TextField } from "./components/TextField"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/Home"
import { ContactPage } from "./pages/Contact"
import { FeaturesPage } from "./pages/Features"




const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/features" element={<FeaturesPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

     

export default App
