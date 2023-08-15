import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Section from './section';
import Cards from './Cards';
// import Section from './section';
function App() {
  return (
    <div>
    <Navbar />
    <Section />
    <Cards  />
    </div>
  )
}

export default App
