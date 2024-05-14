import { useState } from "react";

function Stat(){
    var [data,dataSet]=useState("Hiral")
    function clk(){
        dataSet("Akansha")
    }
    return(
<main>
    <h1>{data}</h1>
    <button onClick={clk}>Click</button>
</main>
    )
}
export default Stat;