import "./App.css";
import Container from "./components/Container";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="app">
      <ThemeProvider>
        <Container />
      </ThemeProvider>
    </div>
  );
}

export default App;
