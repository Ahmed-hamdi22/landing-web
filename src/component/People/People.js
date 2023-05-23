import React from 'react'
import Data from '../Data'
import "./People.css"
const People = () => {
    const itempeople = Data.people.map((items,id)=>{
        return (
         
          <div className='col-md-3'>
        <div className='peoplebox'>
        <div  key={id}>
                <img src={items.imag}/>
                <h2>{items.titel}</h2>
                <p>{items.describe}</p>
                </div>
            </div>
            </div>
        )
    }
    )
  return (
    <div className='container'>

<div className='row title'>
  <h2>BEHIND THE PEOPLE</h2>
  <p>It is a long established fact that create category leading brand experiences a reader will<br/>
   be distracted by the readable content of a page when looking at its layout.</p>
</div>
    <div className='row'>
      {itempeople}
    </div>
    </div>
  )
}

export default People
