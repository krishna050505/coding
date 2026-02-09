import React, { useState } from 'react'

function ToggleButton() {




const [status,setStatus]= useState(true)


  return (
    
    <div className='container'>
        <style>
{`
 .container {
            height: 100vh;
           
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .Status {
            background-color: orange;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            font-size: 20px;
            margin-bottom: 20px;
            width:100px;
            
        
        margin-left: 270px;
          }

        

  }
`}
</style>
<h1  > Toggle </h1>
{status? <div className='Status'>Content </div> :null}


{/* { example 1} */}

<button  onClick={()=>setStatus(false)} > hide</button>
<button onClick={()=>setStatus(true)} > show</button>

{/* { example 2} */}

<button onClick={()=>{setStatus(!status)}}>Toggle</button>


    </div>
  )
}

export default ToggleButton