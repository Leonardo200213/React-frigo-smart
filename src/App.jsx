import { Routes, Route } from "react-router-dom";
import Frigo from "./components/Frigo.jsx";
import Ricette from "./components/Ricette.jsx";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Frigo/>}/>
      <Route path="/ricette" element={<Ricette/>}/>
    </Routes>
  );
}

export default App;