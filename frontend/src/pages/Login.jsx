import { FaSchool } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { useEffect } from "react";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await loginUser(formData);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-10">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl">
        {/* Left Side */}
        <div className="hidden lg:flex bg-indigo-600 p-12 flex-col justify-center text-white">
          <span className="px-4 py-2 bg-white/20 rounded-full w-fit text-sm">
            SchoolFix Portal
          </span>

          <h1 className="text-5xl font-bold mt-6">Welcome Back</h1>

          <p className="mt-6 text-indigo-100 leading-relaxed">
            Login to access issue reports, track repair progress, receive
            notifications and manage school facilities.
          </p>

          <div className="mt-10 space-y-4">
            <div className="bg-white/10 p-4 rounded-2xl">
              📊 Dashboard Analytics
            </div>

            <div className="bg-white/10 p-4 rounded-2xl">
              🔧 Repair Tracking
            </div>

            <div className="bg-white/10 p-4 rounded-2xl">
              🔔 Real-Time Notifications
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-12">
          <div className="flex justify-center">
            <FaSchool className="text-5xl text-indigo-600" />
          </div>

          <h2 className="text-4xl font-bold text-center text-slate-900 mt-4">
            Sign In
          </h2>

          <p className="text-center text-slate-500 mt-2">
            Login to your SchoolFix account
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 mt-8">
            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Role
              </label>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Role</option>
                <option>Parent</option>
                <option>Teacher</option>
                <option>Admin</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center text-slate-500 mt-6">
            Don't have an account?
            <Link to="/register" className="text-indigo-600 font-medium ml-1">
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
