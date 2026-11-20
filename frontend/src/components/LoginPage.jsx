import { useState } from "react";
import { loginPageStyles as a } from "../assets/dummyStyles";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ArrowLeft } from "lucide-react";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // to submit the data
  return (
    <div
      className={a.pageContainer}
      style={{
        fontFamily: "'playfair Display', serif",
      }}
    >
      <ToastContainer />
      <div className={a.mainContent}>
        <button onClick={() => navigate("/")} className={a.backButton}>
          <ArrowLeft className={`h-5 w-5 bg-gray-800`} />
          <span className={a.backButtonText}>Back to Home</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
