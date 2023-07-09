import { CssBaseline } from "@mui/material";
import { Header } from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";

function App() {
  const CustomFontTheme = createTheme({
    typography: {
      fontFamily: "Poppins, Arial, sans-serif",
    },
  });

  return (
    <>
      <ThemeProvider theme={CustomFontTheme}>
        <CssBaseline></CssBaseline>
        <Header></Header>
        <Hero></Hero>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}

export default App;
