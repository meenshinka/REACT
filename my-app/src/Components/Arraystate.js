import {useEffect, useState} from 'react'

const Arraystate = (props) =>{
   const [item,setItem] = useState("")
   const [itemList,setItemList] = useState([])
   // const [a,setA] = useState([]);
   
   console.log(props)
  
   useEffect(()=>{
      let b=[]
      for (let i=0;i<props.aee;i++){
         b.push("hello")
      }
   },[props.aee])
   const handleItem=(e)=>{
     e.target.value
      
   }
   
   const addItem=()=>{
      setItemList([...itemList,item])
      setItem("")  
   }

   return(
   <>
   <div>
      {props.aee.map(()=>(
         <ul>
            <li>hello</li>
         </ul>
      ))}
   </div>
   
   <h2>Item list</h2>
   <input type="text" value={item} onChange={handleItem}></input>
   <button onClick={addItem}>AddItem</button>
   <h1>Items</h1>
   <ul>
     {itemList.map((item,index)=>(
      <li key={index}>{item}</li>
     ))}
   </ul>
   </>
   );
}

export default Arraystate;
