const Comp2 = ({ list, setList }) => {
  localStorage.setItem("list", list);
  const local = localStorage.getItem("list");

  const handleDelelteInput=(input)=>{
   const index=list.findIndex(ele=>ele===input)
   const filteredArray=list.filter((element)=>element!==list[index])
   setList(filteredArray)
  }
  
    return (
      <div>
        <ul>
          {list.map((input, index) => (
            <div style={{"display":"flex", "gap":"3px"}}>
            <li key={index}>{input}</li>
            <button onClick={()=>handleDelelteInput(input)}>Delete</button>
            </div>
          ))}
        </ul>
      </div>
    );
  };
  export default Comp2;
  