const Comp2 = ({ list }) => {
  localStorage.setItem("list", list);
  const local = localStorage.getItem("list");
  
    return (
      <div>
        <ul>
          {list.map((input, index) => (
            <li key={index}>{input}</li>
          ))}
        </ul>
      </div>
    );
  };
  export default Comp2;
  