import './App.css';
import About from './components/pages/About.js'
import Navbar from './components/pages/Navbar.js'
import Register from './components/pages/Register.js'
import Login from './components/pages/Login.js';
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<About />} />
            <Route path="Register" element={<Register />} />
            <Route path="Login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;