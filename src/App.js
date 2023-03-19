import './App.css';
import { useState } from 'react';


function Square({ value }){
  return <button className='p-3 px-6 square border-2 border-black hover:bg-blue-200 text-blue-300'>{value}</button>;
}

export default function Board(){
  return(
    <div className="p-10 bg-blue-300 text-center ">

    <div className="row-auto">
    <Square value="1"/>
    <Square value="2"/>
    <Square value="3"/>
    </div>

    <div className="row-auto">
    <Square value="4"/>
    <Square value="5"/>
    <Square value="6"/>
    </div>

    <div className="row-auto">
    <Square value="7"/>
    <Square value="8"/>
    <Square value="9"/>
    </div>

    </div>
  );
}
