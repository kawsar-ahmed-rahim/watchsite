import { useNavigate } from "react-router-dom";
import { signUpStyles as a } from "../assets/dummyStyles";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import { ArrowLeft, Lock, User, Mail, Eye, EyeOff } from "lucide-react";
const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // to submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // enforce all fields
    if (!name.trim() || !email.trim() || !password) {
      toast.error("Please fill in all fields.", {
        position: "top-right",
        autoClose: 4000,
        theme: "light",
      });
      return;
    }

    // simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
        autoClose: 4000,
        theme: "light",
      });
      return;
    }

    // require remember me explicitly
    if (!rememberMe) {
      toast.error("Please tick 'Remember me' to continue.", {
        position: "top-right",
        autoClose: 4000,
        theme: "light",
      });
      return;
    }

    // === NEW: log all form data ===
    console.log("Signup form submitted — form data:", {
      name,
      email,
      password, // ⚠️ for dev only, don't log raw passwords in production
      rememberMe,
      showPassword,
      timestamp: new Date().toISOString(),
    });

    // success
    toast.success("Signup successful", {
      position: "top-right",
      autoClose: 1200,
      theme: "light",
    });

    setTimeout(() => {
      navigate("/login");
    }, 1250);
  };
  return (
    <div className={a.pageContainer} style={a.pageFontStyle}>
      <ToastContainer />
      <button onClick={() => navigate("/login")} className={a.backButton}>
        <ArrowLeft className={a.backIcon} />
        <span className={a.backText}>Back to Login</span>
      </button>
      <div className={a.formContainer}>
        <div className={a.card}>
          <div className={a.decorativeCircle}></div>
          <h1 className={a.title} style={a.pageFontStyle}>
            Create Account
          </h1>
          <p className={a.subtitle}>
            Simple signup to get you started - light & clean.
          </p>

          <form onSubmit={handleSubmit} className={a.form}>
            <label className={a.label}>Full Name</label>
            <div className={a.inputContainer}>
              <div className={a.inputIconContainer}>
                <User className={a.inputIcon} />
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={a.inputField}
                placeholder="Enter Full Name"
                required
              />
            </div>

            <label className={a.label}>Email</label>
            <div className={a.inputContainer}>
              <div className={a.inputIconContainer}>
                <Mail className={a.inputIcon} />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={a.inputField}
                placeholder="Enter your Email"
                required
              />
            </div>

            <label className={a.label}>Password</label>
            <div className={a.inputContainer}>
              <div className={a.inputIconContainer}>
                <Lock className={a.inputIcon} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={a.inputField}
                placeholder="Create password"
                required
              />
              <button
                type="button"
                className={a.passwordToggleButton}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className={a.passwordToggleIcon} />
                ) : (
                  <Eye className={a.passwordToggleIcon} />
                )}
              </button>
            </div>

            <div className={a.checkboxContainer}>
              <label className={a.checkboxLabel}>
                <input
                  type="checkbox"
                  className={a.checkboxInput}
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  required
                />
                <span className={a.checkboxText}>Remember me</span>
              </label>
            </div>
            <button className={a.submitButton}>Sign Up</button>
          </form>

          <div className={a.bottomContainer}>
            <span className={a.bottomText}>Already have an account? </span>
            <a href="/login" className={a.loginLink}>
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
