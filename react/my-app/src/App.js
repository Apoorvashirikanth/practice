// import logo from './logo.svg';
// import './App.css';

import Greet from './components/Greet.js'
import Welcome from './components/Welcome.js';
import Hello from './components/Hello.js';
import Message from './components/Message.js';
import Counter from './components/Counter.js';
import EventHandling from './components/EventHandling.js';
import ConditionalComponent from './components/ConditionalCompnent.js';

function App() {
  return (
    <div className="App">
      {/* <Greet name="apoorva" country="India" />
      <Greet name="ben" country="China"> 
        HEY this is props.children
      </Greet>
      <Greet name="clark" country="USA"> 
      <button> Clark me </button>
      </Greet>
      <Welcome />
      <Hello /> */}
      {/* <Message></Message> */}
      {/* <Counter /> */}
      {/* <EventHandling /> */}
      <ConditionalComponent />
    </div>
  );
}

export default App;