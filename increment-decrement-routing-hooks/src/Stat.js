import { useState } from "react";

function Stat(){
var [count , setCount] = useState (0);



function increment() {
    setCount(count + 1);
}
function decrement() {
    setCount(count - 1);
}
function reset() {
    setCount(0);
}
    
    return(
<>
<div className="text">
    <h1>React Web</h1>

</div>
<div className="count">
    
    <h2>{count}</h2>
</div>
<div className="btn">
    <button onClick={increment}>Increment Button</button>
    <button onClick={decrement}>Decrement Button</button>
    <button onClick={reset}>Reset</button>
</div>

</>
    );
}
export default Stat;