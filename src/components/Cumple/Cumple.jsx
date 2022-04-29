import React, { useState } from 'react';

const Cumple = ({num}) =>{

    const [age,setAge] = useState(num);

    const aumentaEdad = ()=>{
        setAge(age+1);
    }
    return(
    <div>
        <p>Age : {age}</p>
        <button onClick={aumentaEdad}>Birthday button for</button>
    </div>
    )
}

export default Cumple;