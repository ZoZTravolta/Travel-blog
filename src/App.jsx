import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { theme } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { AppHeader } from "./components/AppHeader";

const App=()=> {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      <AppHeader />
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
