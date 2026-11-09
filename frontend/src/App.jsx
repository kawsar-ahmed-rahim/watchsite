import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Routes className="min-h-screen w-full overflow-x-hidden antialiased bg-white text-slate-900">
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
