import React from 'react'
import { useState } from 'react';
function Checkbox(props) {
  const [value, setValue] = useState('false')
  return (
    <>
     <div className="form-check">
     <input  input_id='123' className="form-check-input" type="checkbox" value={value} id="flexCheckDefault"/>
     <label className="form-check-label" htmlFor="flexCheckDefault">
     {props.name}
     </label>
     </div>
    </>
  )
}

export default Checkbox