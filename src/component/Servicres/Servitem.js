import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Servitem = (props) => {
  return (
    <div className='box'>
      <FontAwesomeIcon icon={props.icon} />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  )
}

export default Servitem;
