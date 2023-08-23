import React, { useState } from 'react';


const Counter = () => {
   const [count,setCount] = useState(0);

   return(<div id='calc'>
   Count: <button id='incr-cnt' onClick={()=> setCount(count+1)}>{count}</button>
   </div>)
}

export default Counter