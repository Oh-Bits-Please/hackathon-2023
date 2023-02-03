import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Navbar from "./components/Navbar";
import "mapbox-gl/dist/mapbox-gl.css";
import ProductList from './routes/products/ProductList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
