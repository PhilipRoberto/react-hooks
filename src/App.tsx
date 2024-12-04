import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UseState from "./pages/hooks/useState";
import Nav from "./components/Nav";
import UseEffect from "./pages/hooks/useEffect";
import UseMemo from "./pages/hooks/useMemo";
import UseRef from "./pages/hooks/useRef";
import UseContext from "./pages/hooks/useContext";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/useState" element={<UseState />} />
        <Route path="/useEffect" element={<UseEffect />} />
        <Route path="/useMemo" element={<UseMemo />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/useContext" element={<UseContext />} />
      </Routes>
    </div>
  );
};

export default App;
