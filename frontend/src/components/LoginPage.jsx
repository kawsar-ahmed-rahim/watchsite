import { useState } from "react";
import { loginPageStyles as a } from "../assets/dummyStyles";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { ArrowLeft, Eye, EyeOff, User, Lock } from "lucide-react";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // to submit the data
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!email || !password) {
      toast.error("Please fill in all fields.", {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
      });
      return;
    }

    if (!rememberMe) {
      toast.error("You must agree to remember me.", {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
      });
      return;
    }

    // === NEW: log all form data to the console ===
    // NOTE: Logging passwords is fine for development/testing only. Remove before production.
    console.log("Login form submitted — form data:", {
      email,
      password,
      rememberMe,
      showPassword,
      timestamp: new Date().toISOString(),
    });

    // Simulate a successful login: store auth info in localStorage so Navbar can detect it
    try {
      // create a simple fake token for demo (replace with real token from server in production)
      const fakeToken = btoa(`${email}:${Date.now()}`);

      // Persist token & login flag (Navbar checks these keys)
      localStorage.setItem("authToken", fakeToken);
      localStorage.setItem("isLoggedIn", "true");

      try {
        window.dispatchEvent(
          new CustomEvent("authChanged", { detail: { loggedIn: true } }),
        );
      } catch (err) {
        // ignore if browser doesn't allow CustomEvent construction in this environment
      }
    } catch (err) {
      // ignore storage errors
    }

    // Show success toast
    toast.success("Login successful!", {
      position: "top-right",
      autoClose: 1200,
      theme: "light",
    });

    // Redirect to home after short delay so user sees the toast
    setTimeout(() => {
      navigate("/");
    }, 1250);
  };
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
          <ArrowLeft className={`h-5 w-5 text-gray-800`} />
          <span className={a.backButtonText}>Back to Home</span>
        </button>

        <div className={a.loginCard}>
          <div className={a.decorativeTopLeft}></div>
          <div className={a.decorativeBottomRight}></div>

          <h2 className={a.cardTitle}>Welcome Back</h2>
          <p className={a.cardSubtitle}>Sign in to your account</p>

          <form onSubmit={handleSubmit}>
            <div className={a.formField}>
              <label htmlFor="email" className={a.formLabel}>
                Email
              </label>
              <div className={a.inputContainer}>
                <div className={a.inputIconContainer}>
                  <User className={a.inputIcon} />
                </div>
                <input
                  type="email"
                  id="email"
                  className={a.inputBase}
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className={a.formField}>
              <label htmlFor="password" className={a.formLabel}>
                Password
              </label>
              <div className={a.inputContainer}>
                <div className={a.inputIconContainer}>
                  <Lock className={a.inputIcon} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className={a.passwordInputBase}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  className={a.passwordToggle}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className={a.inputIcon} />
                  ) : (
                    <Eye className={a.inputIcon} />
                  )}
                </button>
              </div>
            </div>

            <div className={a.rememberMeContainer}>
              <div className={a.checkboxContainer}>
                <input
                  type="checkbox"
                  id="rememberMe"
                  className={a.checkbox}
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  required
                />
              </div>
              <div className={a.checkboxLabelContainer}>
                <label htmlFor="rememberMe" className={a.checkboxLabel}>
                  Remember Me <span className={a.requiredStar}>*</span>
                </label>
              </div>
            </div>
            <button className={a.submitButton}>Login</button>
          </form>
        </div>
      </div>
      {/* Add font import */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');`}
      </style>
    </div>
  );
};

export default LoginPage;
