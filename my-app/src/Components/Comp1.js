/*
to-do list
first we will handle an array to which will contain the to-do List
then the list will be stored in the localStorage.
*/

import { useState } from "react";
import Comp2 from "./Comp2";

const Comp1 = () => {
  const [userInput, setUserInput] = useState("");
  const [toDoArray, setToDoArray] = useState([]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleAddInput = () => {
    /*easiest thing we can do to update the todoArray state is by doing todoArray.push(userInput). 
    but we can't do this because in React we can't update the state directly. We have to use the
    setter function, but we can't do something like settodoArray.push(userInput) becuase we are
    applying a function to another function. So the only way we are left with is to create the 
    data which we can put inside setTodoarray. The best way to create the data is by copying all the 
    data from the todoarray to a new array and then adding the userinput to the new array and putting this data
    inside settodoarray() to update the todoarray state.*/

    //const newArray = userInputList.map((ele)=>ele)
    if (userInput !== "") {
      const newArray = toDoArray.map((ele) => {
        return ele;
      });
      newArray.push(userInput);
      setToDoArray(newArray);
      setUserInput("");
    }
  };

  return (
    <div>
      <h2>To Do List</h2>
      <input type="text" value={userInput} onChange={handleInputChange} />
      <button onClick={handleAddInput}>Add</button>


      <Comp2 list={toDoArray} />
    </div>
  );
};
export default Comp1;
