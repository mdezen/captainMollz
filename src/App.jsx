import './App.css'
import Navbar from './Navbar'
import Home from "./Home"
import Vote from './Vote'
import Donate from "./Donate"
import Contact from "./Contact"
import {Route, Routes} from 'react-router-dom'


function App() {
  return (
    <>
       <Navbar />
       <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="/Vote" element= {<Vote/>}/>
          <Route path="/Donate" element= {<Donate/>}/>
          <Route path="/Contact" element= {<Contact/>}/>
       </Routes>
    </>
  )
}

export default App


