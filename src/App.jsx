import { Routes, Route } from "react-router-dom";
import Frigo from "./components/pagine/Frigo.jsx";
import Ricette from "./components/pagine/Ricette.jsx";
import Spesa from "./components/pagine/Spesa.jsx"

function App() {
  return(
    <Routes>
      <Route path="/" element={<Frigo/>}/>
      <Route path="/ricette" element={<Ricette/>}/>
      <Route path="/spesa" element={<Spesa/>}/>
    </Routes>
  );
}

export default App;