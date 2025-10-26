// In src/App.jsx

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { NotFound } from "./pages/notFound";

// 1. Remove the old import
// import LiquidEtherBackground from "./components/LiquidEtherBackground";
// 2. Add the new import
import DarkVeilBackground from "./components/DarkVeilBackground";

function App() {
  return (
    <>
      {/* 3. Replace the old component with the new one and its "usage" props */}
      {/* I'm using typical props from the react-bits example. Adjust as you like! */}
      <DarkVeilBackground
        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
        amount={25}
        origin={{ x: 0.5, y: 0.5 }}
        speed={0.15}
        blur={0.8}
        noise={0.02}
        radius={0.9}
        blending="screen"
      />

      {/* Your router and pages will render on top of the new background */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
