import '../ReUsableomponents/Button.css';

import React from 'react';

function Button({ onClick, children }) {
  return (
    <div>
      {/* <button className="btn" onClick={onClick}>
        {children || "Click"}
      </button> */}

      <button className="gradient-button"
      
      
      >
  <span className="gradient-text"  onClick={onClick}> click</span>
</button>
    </div>
  );
}

export default Button;

