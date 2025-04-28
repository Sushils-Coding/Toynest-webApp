import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError("Failed to sign in");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="p-[10px] h-[80px]">
        <Navbar />
      </div>
      <div className="bg-gray-50 min-h-screen py-12 px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Welcome Back to <span className="text-amber-500">ToyNest</span>
            </h2>
            <p className="text-lg text-gray-600">
              Sign in to access your account
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg text-center">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-8"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-amber-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-600 transition-colors duration-300 disabled:opacity-50"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>
              </div>
              <div className="text-center pt-4">
                <Link
                  to="/register"
                  className="text-amber-600 hover:text-amber-700 font-medium"
                >
                  Don't have an account? Sign up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
