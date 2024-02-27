import logo from './logo.svg';
import './App.css';
// import ModeToggler from './EventHandling/ModeToggler';
// import Home from './Component/Home';
// import Card from './Component/Card';
// import Dog from './DataFlow/Dog';
// import Detail from './StateExample/Detail';
import Main from './MessagePassing/Main';

function App() {
  // function Handler() { 
  //   let randomNum = Math.floor(Math.random() * 3) + 1;
  //   console.log(randomNum);
  //   let userInput = prompt('type a number'); 
  //   alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  // }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Home firstName="Bob"/>
      <h1>Task: Add three Card elements</h1>
      <Card h2="First card's h2" h3="First card's h3"/>
      <Card h2="Second card's h2" h3="Second card's h3"/>
      <Card h2="Third card's h2" h3="Third card's h3"/> */}
      {/* <ModeToggler /> */}
      {/* <button onClick={Handler}>Guess the Number Between One and Three</button> */}

      {/* <Dog /> */}
      {/* <Detail/> */}
      <Main  
      msg="I passed through the Header and the Wrapper and I reached the Button component"  
    />
    </div>
  );
}

export default App;
