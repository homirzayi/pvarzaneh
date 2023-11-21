import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Novbat from "./pages/Novbat";

function App() {
  return (
    <div className="dark:bg-black dark:text-white">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novbat" element={<Novbat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
