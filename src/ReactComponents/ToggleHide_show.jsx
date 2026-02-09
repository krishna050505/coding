import React from 'react'

import { useState } from 'react'
import Button from '../ReUsableomponents/Button';

const ToggleHide_show = () => {

 const [display,setDisplay]=useState(true);
  return (

   
    <div>
      


<h1>Toggle Button</h1>
{display?<h3 style={{color:"orange"}} >button Displayed  </h3> :null}
{/* <button onClick={()=>setDisplay(! display)}
 style={{
          backgroundColor: display ? "blue" : "gray",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          // sparkle effect triggered by display state
        boxShadow:display? "0 0 20px yellow":"none"
        }}>Toggle</button> */}

<Button onClick={()=>setDisplay(! display)}/>
    </div>
  )
}

export default ToggleHide_show



