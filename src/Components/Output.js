import React from 'react';
import data from './data.js'
function Output() {
  return (
    <div>
      {data.map((item) =>{
        {item.booked?<h3 style={{backgroundColor: 'lightblue'}}>Booked</h3>:<h3 style={{backgroundColor: 'lightred'}}>Unbooked</h3>}
      })}
    </div>
  )
}

export default Output;