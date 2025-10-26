import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { NotFound } from "./pages/notFound";
import DarkVeilBackground from "./components/DarkVeilBackground";

function App() {
  return (
    <>
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
