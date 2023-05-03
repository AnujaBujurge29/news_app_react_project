import "./App.css";
//import Routeers
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
//import Components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FetchAPI from "./components/FetchAPI";

function App() {
  return (
    <div className="App">
      <h2>Hello News World</h2>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/General' element={<FetchAPI categories="general"/>}></Route>
          <Route path='/Business' element={<FetchAPI categories="business"/>}></Route>
          <Route path='/Entertainment' element={<FetchAPI categories="entertainment"/>}></Route>
          <Route path='/Health' element={<FetchAPI categories="health"/>}></Route>
          <Route path='/Science' element={<FetchAPI categories="science"/>}></Route>
          <Route path='/Sports' element={<FetchAPI categories="sports"/>}></Route>
          <Route path='/Technology' element={<FetchAPI categories="technology"/>}></Route>

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
