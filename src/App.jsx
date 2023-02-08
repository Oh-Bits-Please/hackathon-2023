import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./routes/login/Login";
import Signup from "./routes/signup/Signup";
import "mapbox-gl/dist/mapbox-gl.css";
import ProductList from "./routes/products/ProductList";
import Profile from "./routes/profile/profile.component";
import ProductDetails from "./routes/product-details/product-details.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
