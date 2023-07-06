import { createTheme } from "@mui/system";
import { Header } from "./components/Header";

const theme = createTheme({
  typography: {
    fontFamily: ["Popppins", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <>
      <Header></Header>
    </>
  );
}

export default App;
