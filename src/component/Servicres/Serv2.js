import React from 'react'
import online from "./../../assat/online-world-ba029cf8887f4299446296263ab79b61.svg"
import"./Services.css"
const Serv2 = () => {
  return (
    <section className='last'>
    <div className="container">
    <div className='row'>
    <div className='col-md-6 '>
      <h3>
      A digital web design studio creating <br/>
      modern & engaging online experiences
      </h3>
      <p>Separated they live in Bookmarksgrove right at the coast of the Semantics,<br/> a large language ocean. A small river named Duden flows by their place <br/>and supplies it with the necessary regelialia.</p>
   <ul>
    <li>
    We put a lot of effort in design.
    </li>
    <li>The most important ingredient of successful website.</li>
    <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
    <li>Submit Your Orgnization.</li>

    <button>Learm More</button>
  
   </ul>
      </div>
      <div className='col-md-6'>  
      <img src={online}/>
      </div>
      </div>
    </div>
    </section>
  )
}

export default Serv2
