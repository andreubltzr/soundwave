import { CssBaseline } from "@mui/material";
import { Header } from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Discover } from "./components/Discover";
import { Join } from "./components/Join";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, Arial, sans-serif",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/Discover" element={<Discover />}></Route>
          <Route path="/Join" element={<Join />}></Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
