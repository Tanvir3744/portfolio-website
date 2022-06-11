import Home from "./components/Home/Home";
import Navbar from "./components/Shared/Navbar";
import { Route, Routes } from 'react-router-dom';
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
