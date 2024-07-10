import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Item from "./Components/Item";
import Success from "./Components/Success";
import Failure from "./Components/Failure";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/:idInt" element={<Item/>}></Route>
          <Route exact path="/success" element={<Success/>}></Route>
          <Route exact path="/failure" element={<Failure/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
