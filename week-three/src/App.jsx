import {
  useState,
  useRef
} from "react";
import logo from './logo.svg';
import './App.css';
// import AboutMe from './Pages/AboutMe';
// import Contact from './Pages/Contact';
// import {Routes, Route} from 'react-router-dom';
// import { Link } from 'react-router-dom';

// function App() {
//   const bird1 = new Audio( 
//     "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3" 
//   ); 
 
//   const bird2 = new Audio( 
//     "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3" 
//   ); 
 
//   function toggle1() { 
//     if (bird1.paused) { 
//       bird1.play(); 
//     } else { 
//       bird1.pause(); 
//     } 
//   }; 
 
//   function toggle2() { 
//     if (bird2.paused) { 
//       bird2.play(); 
//     } else { 
//       bird2.pause(); 
//     } 
//   }; 
function App()
{
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	// Add the code for the minus function 
    e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  function times(e) { 
    // Add the code for the plus function 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));
  }; 
 
  function divide(e) { 
    // Add the code for the divide function 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value));
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function 
    e.preventDefault();
    inputRef.current.value = '';
  }; 
  function resetResult(e) { 
  	// Add the code for the resetResult function
    e.preventDefault();
    setResult(0);
  };
  return (
    <div className="App">
            <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
        {result}
          {/* add the value of the current total */} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>subtract</button> 
        <button onClick={times}>multiply</button> 
        <button onClick={divide}>divide</button> 
        <button onClick={resetInput}>reset Input</button> 
        <button onClick={resetResult}>reset result</button> 
        {/* Add the subtract button */} 
        {/* Add the multiply button */} 
        {/* Add the divide button */} 
        {/* Add the resetInput button */} 
        {/* Add the resetResult button */} 
      </form> 
      {/* <nav className='nav'>
        <Link to="/" className="nav-item">About Me</Link>
        <Link to="/contact" className="nav-item">Contact us</Link>
        
      </nav>
      <Routes>
        <Route path='/' element={<AboutMe/>}/>
        <Route path='/Contact' element = {<Contact/>}/>
      </Routes> */}
      {/* <AboutMe/>
      <Contact/> */}
      {/* <h1>Ghulam Hasnain Otho</h1>
      <button onClick={toggle1}>Caspian Tern 1</button> 
      <button onClick={toggle2}>Caspian Tern 2</button>  */}
    </div>
  ); 
}

export default App;
