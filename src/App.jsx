import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Commercialcivil from "./pages/Commercialcivil";
import Electrical from "./pages/Electrical";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>

      <Route element={<Layout />}>

        <Route path="/" element={<Home />} />

        <Route
          path="/Commercial-civil"
          element={<Commercialcivil/>}
        />

        <Route
          path="/electrical"
          element={<Electrical />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Route>

    </Routes>
  );
}

export default App;