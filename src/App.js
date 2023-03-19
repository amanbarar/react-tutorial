import './App.css';
import { useState } from 'react';


function Square({value, onSquareClick}){
  return (
    <button className='p-3 px-6 square border-2 border-black hover:bg-blue-200' onClick={onSquareClick}>{value}</button>
    );
}

export default function Board(){

  const[squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return(
    <div className="p-10 bg-blue-300 text-center ">

    <div className="row-auto">
    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
    </div>

    <div className="row-auto">
    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
    </div>

    <div className="row-auto">
    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>

    </div>
  );
}
