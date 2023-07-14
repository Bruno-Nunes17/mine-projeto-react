import { Cart } from './pages/Cart/Cart';
import { Home } from './pages/Home/HomePage';
import { HeaderPartial } from './partials/HeaderPartials';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <HeaderPartial />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
