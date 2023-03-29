// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  const[count, setCount] = useState(0);
  function decreseHandler(){
    setCount(count-1);
  }

  function increseHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className='w-[100vw] h-[100vh] flex flex-col bg-[#344151] justify-center items-center gap-10'>
      <div className='text-[#0398d4] font-medium text-2xl'>Increment and Decrement</div>
      <div className='bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]'>
        <button onClick={decreseHandler} className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'>
          -
        </button>
        <div className='font-bold gap-12 text-5xl'>
          {count}
        </div>
        <button onClick={increseHandler} className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl'>
          +
        </button>
      </div>
      <button onClick={resetHandler} className='bg-[#0398d4] w-40 font-medium text-[30px]'>
        reset
      </button>
    </div>
  );
}

export default App;
