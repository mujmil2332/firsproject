import React, { useState } from 'react';

function Increament(){
    const [count,setCount] = useState (0);

    const increament = () => {
        setCount(count +1);
    };
    return(
<div>
    <p>Count: {count}</p>
    <button onClick={increament}>Increament</button>
 </div>   
    );
}
export default Increament;