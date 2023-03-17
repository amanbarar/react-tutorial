import './App.css';
import { useState } from 'react';


export default function MyApp(){

  const [count, setCount] = useState(0); //current state(count), updated state(setCount)

  function handleClick(){
    setCount(count + 1);
  }
  //using props in MyButton
  return(
    <div className='bg-window'>
    <h1>Counters that update separately</h1>
    <MyButton count={count} onClick={handleClick} />
    <MyButton count={count} onClick={handleClick}/>
    </div>
  );
}


function MyButton({ count, onClick }){
  return(
    <button onClick={onClick}>
      Clicked {count} times.
    </button>
  );
}