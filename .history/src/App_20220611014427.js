import Home from "./components/Home/Home";
import Navbar from "./components/Shared/Navbar";
import { Route, Routes } from 'react-router-dom';
import About from "./components/About/About";
import Footer from "./components/Shared/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
