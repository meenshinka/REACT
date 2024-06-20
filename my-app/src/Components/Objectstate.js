import { useState } from "react"

const Objectstate=()=>{
    const [name,setName]=useState("")
    const [age,setAge]=useState()
    const [item, setItem]=useState({})
    
    const handleName=(e)=>{
        setName(e.target.value)
    }

    const handleAge=(e)=>{
        setAge(e.target.value)
    }

    const addItem=()=>{
        setItem({item, name:name,age:age}) 
        setName("")
        setAge("")
    }
    
    return(
        <>
        <input type="text" value={name} onChange={handleName} ></input>
        <input type="text" value={age} onChange={handleAge} ></input>
        <button onClick={addItem}>add</button>
        <div>
            {item.name}
            {item.age}
        </div>
        </>
    )
}

export default Objectstate;

/*
1- there can't be multiple keys with same name, so each time the values will be overridden.
2- spread operator not needed because object was empty. and the 1st point is also a reason.
3- button k click hone pe state update hoga, toh if setitem onclick funtion me hoga,
4- if onchange me hum set kreange values toh each time ek ek letter bhi save hota jayega.
*/ 