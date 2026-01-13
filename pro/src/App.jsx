import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Component/Footer'
import { BrowserRouter } from 'react-router-dom'




function App() {
  const [count, setCount] = useState(0)
    

  return (
    <>
    {/* <Header/> */}
    <h1>this is react
      <div></div>
    </h1>
    <BrowserRouter/> 
    <Footer/>
    </>
  )
}

export default App
