import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UseState from "./pages/hooks/useState";
import Nav from "./components/Nav";
import UseEffect from "./pages/hooks/useEffect";
import UseMemo from "./pages/hooks/useMemo";
import UseRef from "./pages/hooks/useRef";
import UseContext from "./pages/hooks/useContext";
import UseReducer from "./pages/hooks/useReducer";
import UseCallback from "./pages/hooks/useCallback";
import CustomHook from "./pages/hooks/customHook";
import UseLayoutEffect from "./pages/hooks/useLayoutEffect";

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
        <Route path="/useReducer" element={<UseReducer />} />
        <Route path="/useCallback" element={<UseCallback />} />
        <Route path="/customHook" element={<CustomHook />} />
        <Route path="/useLayoutEffect" element={<UseLayoutEffect />} />
      </Routes>
    </div>
  );
};

export default App;
