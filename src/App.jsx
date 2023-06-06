import "./App.css";
import Home from "./components/Home";
import SearchForm from "./components/SearchForm";
import { ThemeProvider } from "./components/UI/themeContent";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <div className="w-screen  h-screen bg-gray-50  dark:bg-slate-500">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/weather" element={<SearchForm />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
