import Home from "./components/Home/Home";
import Navbar from "./components/Shared/Navbar";
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
    </div>
  );
}

export default App;
