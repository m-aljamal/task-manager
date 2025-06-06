import Header from "./components/Header";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Header />
    </ThemeProvider>
  );
}

export default App;
