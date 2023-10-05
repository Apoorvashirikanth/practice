// import logo from './logo.svg';
// import './App.css';

import Greet from './components/Greet.js'
import Welcome from './components/Welcome.js';
import Hello from './components/Hello.js';

function App() {
  return (
    <div className="App">
      <Greet name="apoorva" country="India" />
      <Greet name="ben" country="China"> 
        HEY this is props.children
      </Greet>
      <Greet name="clark" country="USA"> 
      <button> Clark me </button>
      </Greet>
      <Welcome />
      <Hello />
    </div>
  );
}

export default App;