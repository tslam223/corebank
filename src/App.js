import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Savings from "./pages/Savings";
import Notfound from "./pages/Notfound";



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};

export default App;
