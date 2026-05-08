import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Chakra from "./components/chakra.jsx";
import Fonts from "./components/fonts.jsx";
import { Navbar, Footer } from "./components";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Chakra>
      <Fonts />
      <Navbar />
      <App />
      <Footer />
    </Chakra>
  </StrictMode>,
);
