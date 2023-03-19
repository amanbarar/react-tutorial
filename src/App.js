import './App.css';
import { useState } from 'react';


export default function Board(){
  return(
    <div className="p-10 bg-blue-300 text-center ">

    <div className="row-auto">
    <button className='p-3 px-6 square border-2 border-black hover:bg-blue-200 text-blue-300'>1</button>
    <button className='p-3 px-6 square border-2 border-black hover:bg-blue-200 text-blue-300'>2</button>
    <button className='p-3 px-6 square border-2 border-black hover:bg-blue-200 text-blue-300'>3</button>
    </div>

    <div className="row-auto">
    <button className='p-3 px-6 square border-2 border-black hover:bg-blue-200 text-blue-300'>4</button>
    <button className='p-3 px-6 square border-2 border-black hover:bg-blue-200 text-blue-300'>5</button>
    <button className='p-3 px-6 square border-2 border-black hover:bg-blue-200 text-blue-300'>6</button>
    </div>

    <div className="row-auto">
    <button className='p-3 px-6 square border-2 border-black hover:bg-blue-200 text-blue-300'>7</button>
    <button className='p-3 px-6 square border-2 border-black hover:bg-blue-200 text-blue-300'>8</button>
    <button className='p-3 px-6 square border-2 border-black hover:bg-blue-200 text-blue-300'>9</button>
    </div>

    </div>
  );
}