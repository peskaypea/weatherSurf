import "./App.css";
import Home from "./components/Home";
import SearchForm from "./components/SearchForm";
import { ThemeProvider } from "./components/UI/themeContent";

function App() {
  return (
    <ThemeProvider>
      <div className="w-screen  h-screen bg-slate-200 dark:bg-slate-800">
        <Home />
        {/* <SearchForm /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
