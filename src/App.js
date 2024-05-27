import "./App.css";
import Pricing from "./pages/Pricing";
import { useSelector } from "react-redux";

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-light dark:bg-gray-900 text-black dark:text-white min-h-screen ">
        <Pricing />
      </div>
    </div>
  );
}

export default App;
