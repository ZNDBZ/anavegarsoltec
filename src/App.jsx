import Navbar from "./components/Navbar";
import Section from "./components/Sections";
import {Routes, Route, Link } from "react-router-dom";
import Repair from "./components/Repair";
import Footer from "./components/Footer";
import Ubication from "./components/Ubication";
import Multi from "./components/Multi"
function App() {
  return (
    <>
    <div className="flex flex-col gap-y-[200px]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Section></Section>}/>
          <Route path="/repair" element={<Repair/>} />
          <Route path="/ubicacion" element={<Ubication/>}/>
          <Route path="/multi" element={<Multi/>} />
        </Routes>
        <Footer/>
    </div>
    </>
  );
}

export default App;
