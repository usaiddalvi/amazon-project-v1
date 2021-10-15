import React from 'react';
import "./Subtotal.css";

function Subtotal() {
    return (
        <div className="subtotal">
           <p>Subtotal(0 items):<strong>0</strong></p> 
           <small className="subtotal--gift">
               <input type="checkbox"/>This order contains gift

           </small>
           <button>Proceed to buy</button>
        </div>
    );
}

export default Subtotal
