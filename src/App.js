import logo from "./logo.svg";
import "./App.css";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TodoContainer />
    </div>
  );
}

export default App;
