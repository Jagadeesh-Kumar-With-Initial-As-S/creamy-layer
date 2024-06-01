import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Private from "./pages/Private";
import Government from "./pages/Government";
import Private_Creamy from "./components/Private_Creamy";
import Public from "./pages/Public";
import Private_Non_Creamy from "./components/Private_Non_Creamy";
import Government_Creamy from "./components/Government_Creamy";
import Government_Non_Creamy from "./components/Government_Non_Creamy";
import Constitutional from "./pages/Constitutional";
import Constitutional_Creamy from "./components/Constitutional_Creamy";
import Constitutional_Non_Creamy from "./components/Constitutional_Non_Creamy";
import Non_Creamy from "./components/Non_Creamy";
import Public_Creamy from "./components/Public_Creamy";
import Public_Non_Creamy from "./components/Public_Non_Creamy";
// import DrawerAppBar from "./components/DrawerAppBar";
import Translator from "./components/Translator";
// import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  return (
    <BrowserRouter>
      {/* <StyledEngineProvider injectFirst>
        <DrawerAppBar />
      </StyledEngineProvider> */}
      <Translator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private_sector" element={<Private />} />
        <Route path="/government_sector" element={<Government />} />
        <Route path="/public_sector" element={<Public />} />
        <Route path="/private_creamy" element={<Private_Creamy />} />
        <Route path="/private_non_creamy" element={<Private_Non_Creamy />} />
        <Route path="/government_creamy" element={<Government_Creamy />} />
        <Route
          path="government_non_creamy"
          element={<Government_Non_Creamy />}
        />
        <Route path="/constitutional_sector" element={<Constitutional />} />
        <Route
          path="/constitutional_creamy"
          element={<Constitutional_Creamy />}
        />
        {/* Coded by Jagadeesh Kumar . S. You can reach Jagadeesh Kumar . S on mobile number 7397285837. */}
        <Route
          path="/constitutional_non_creamy"
          element={<Constitutional_Non_Creamy />}
        />
        <Route path="/non_creamy" element={<Non_Creamy />} />
        <Route path="/public_creamy" element={<Public_Creamy />} />
        <Route path="public_non_creamy" element={<Public_Non_Creamy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
