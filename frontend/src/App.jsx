import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Brand from "./pages/Brand";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
const App = () => {
  return (
    <div>
      <Routes className="min-h-screen w-full overflow-x-hidden antialiased bg-white text-slate-900">
        <Route path="/" element={<Home />} />
        <Route path="/brands/:brandName" element={<Brand />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
};

export default App;
