// import logo from './logo.svg';
import './App.css';
// import Arraystate from './Components/Arraystate'
import Objectstate from './Components/Objectstate'
import Comp1 from './Components/Comp1';

function App() {
  
  const arr=[];
  for(let i=1;i<100;i++){
     arr.push(i);
  }
    
  return (
    <>
    {/* <Arraystate aee={arr.length}/> */}
    {/* <Objectstate/> */}
    <Comp1/>
    </>
  );
}

export default App;
