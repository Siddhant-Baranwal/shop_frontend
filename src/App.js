import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Item from "./Components/Item";
import Success from "./Components/Success";
import Failure from "./Components/Failure";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Pay from "./Components/Pay";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home/>}></Route>
          <Route exact path="/" element={<Main/>}></Route>
          <Route exact path="/:idInt" element={<Item/>}></Route>
          <Route exact path="/success" element={<Success/>}></Route>
          <Route exact path="/failure" element={<Failure/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
          <Route exact path="/pay" element={<Pay/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
