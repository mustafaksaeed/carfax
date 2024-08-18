import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Vin from './Components/Vin';
import Compare  from './Components/Compare';
import Model from './Components/Model';
import Layout from "./Components/Layout";

function App() {
  return (
  <BrowserRouter>
  <Routes>
   <Route path="/" element={<Layout />} />
  <Route path = "Model" element= {<Model />} />
  <Route path = "Compare" element = {<Compare />} />
  <Route path = "Vin" element = {<Vin />} />
 </Routes>
  </BrowserRouter>
  );
}

export default App;

