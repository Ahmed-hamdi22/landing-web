import React from 'react'
import Home from './component/Home'
import Navb from './component/Nav/Navb'
import Banner from './component/Banner/Banner'
import Pricing from './component/Pricing/Pricing'
import People from './component/People/People'
import Footer from './component/Foot/Footer'



const App = () => {
  return (
    <div>
    <Navb/>
      <Home/>
      <Banner/>
      <Pricing/>
      <People/>
      <Footer/>
    </div>
  )
}

export default App
