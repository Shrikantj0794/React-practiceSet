import React from 'react';

const SlotMachine = (props)=>{
    let {x,y,z} = props;
    return <>
    <div className="slot_inner">
        <h1>{x}{y}{z}</h1>
        {(x===y) && (y===z)? <h1>This is Matching</h1>: <h1>This is Not Matching</h1>}
        <hr />
    </div>
    </>
}
export default SlotMachine