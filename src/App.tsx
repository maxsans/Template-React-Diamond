import Navbar from "./components/Navbar/Navbar";
import FullScreen from "./views/FullScreen/FullScreen";
import Home from "./views/Home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/fullscreen" element={<FullScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
