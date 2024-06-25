import './App.css';
import About from './components/pages/About.js'
import Navbar from './components/pages/Navbar.js'
//import Register from './components/pages/Register.js'
import Books from './components/pages/Books.js';
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<About />} />
            <Route path="books" element={<Books />} />
            {/* <Route path="register" element={<Register />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;