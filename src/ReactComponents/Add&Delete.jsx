 import React, { useState } from 'react'
 
 function AddDelete() {
const[fruits,setFruits]=useState(
    [
        "Apple 🍎",
        "Orange 🍊",
        "Banana 🍌",
        "grapes 🍇",
        " Kiwi 🥝",
        " mango 🥭",
        " pineapple 🍍",

    ]
);

const onDelete=(fruit)=>{
    setFruits( existingFruits=>{
      return  existingFruits.filter((item) =>item !==fruit)
    })

    
}
const onAdd = (fruit) => { setFruits(existingFruits => [...existingFruits, fruit]); };

   return (


     <div>

        <style>
{
    `
    body {
    display:flex;
    justify-content:center
    }

    ul {
    list-style-type:none;
    padding:0;
    
    }
    li {
    padding:6px 0;
    display:flex;
     justify-content:space-between
    }

    button
    {
    margin-left:20px;
    }
    
    
    `
}


        </style>
       <ul>
        {
            fruits.map((fruit)=>{
              return  <li key={fruit}><span>{fruit}</span> <button onClick={()=>onDelete(fruit)}>Delete</button>
               <button onClick={() => onAdd(fruit)}>Add</button>
              </li>
            })
        }
       </ul>
     </div>
   )
 }
 
 export default AddDelete
 