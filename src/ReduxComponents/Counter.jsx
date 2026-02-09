
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../store/Slices/counterSlice';

function Counter() {
  const value = useSelector((state) => state.counter.count); 
  const action=useSelector((state)=>state.counter.perFormedAction)
  const dispatch = useDispatch();
  function incrementCount() {
    dispatch(increment("value incressed"));
  }
  function decrementCount(){
    dispatch(decrement("value decreased"))
    console.log(value)
  }
  function resetCount(){
    dispatch(reset("value is 0"))

  }


  return (
   <>
   <style> {` 
   .btn { cursor: pointer;
    padding: 10px;
     margin: 5px;
      background-color: grey
      ; border: none;
       border-radius: 5px;
       transition: filter 0.3s ease;
        }
        .btn:hover {
       filter: brightness(130%);
       background-color: black;
       color: white;
         }
         .btn:active { filter: brightness(80%);
         background-color: lightgrey;}
         
         `}
          </style>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter</h1>
      <h1 style={{margin:"60px" ,fontSize:"100px",textAlign:"center"}}>{value}</h1>
      <h2 style={{textAlign:"ceenter", margin:"20px",color:"-moz-initial", backgroundColor:"revert"}}>  Action:{action}</h2>
    

      {/* <button onClick={() => dispatch(increment())}>➕ Increment</button>
      <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
      <button onClick={() => dispatch(reset())}>🔄 Reset</button> */}
      
      <div style={{gap:"9px",display:"flex", justifyContent:"center"}}>
      <button onClick={incrementCount} className="btn" >Increment</button>
            <button onClick={resetCount}className="btn" >Reset</button>
      <button onClick={decrementCount} className="btn" >Decrement</button>
</div>
     
    </div>
    </>
  );
}

export default Counter;

