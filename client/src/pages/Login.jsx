import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if userLoggedIn value is present in localStorage
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    if (userLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    // Simulate login
    if (formData.email === "test@gmail.com" && formData.password === "test") {
      setLoading(true);
      window.localStorage.setItem("isLoggedIn", true);
      alert("User logged in successfully");
      window.location.href = "/";
    }
  };

  const handleLogout = () => {
    // Log out the user
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    alert("User logged out successfully");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/");
  };

  if (!isLoggedIn) {
    return (
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="email"
            className="border p-3 rounded-lg"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="password"
            className="border p-3 rounded-lg"
            id="password"
            onChange={handleChange}
          />

          <button
            disabled={loading}
            onClick={handleLogin}
            className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
        </form>
        <div className="flex gap-2 mt-5">
          <p>Dont have an account?</p>
          <Link to={"/sign-up"}>
            <button className="text-blue-700">Sign up</button>
          </Link>
        </div>
      </div>
    );
  } else if(isLoggedIn) {
    return (
      <div className="p-3 max-w-lg mx-auto">
        <button
          disabled={loading}
          onClick={handleLogout}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Logout"}
        </button>
      </div>
    );
  }
}
