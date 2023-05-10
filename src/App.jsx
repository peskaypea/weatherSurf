import "./App.css";
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";
import { ThemeProvider } from "./components/UI/themeContent";

function App() {
  return (
    <ThemeProvider>
      <div className="w-screen  h-screen bg-slate-400">
        <NavBar />
        <SearchForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
