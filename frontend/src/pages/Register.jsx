import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { registerUser, loginUser } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    schoolId: "",
    role: "",
    password: "",
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

    // Register
    const registerResponse = await registerUser(formData);
    console.log("Register:", registerResponse);

    // Login
    const loginResponse = await loginUser({
      email: formData.email,
      password: formData.password,
      role: formData.role,
    });

    console.log("Login:", loginResponse);

    localStorage.setItem("token", loginResponse.token);
    localStorage.setItem("user", JSON.stringify(loginResponse.user));

    navigate("/dashboard");
  } catch (error) {
    console.error("Error:", error);
    console.error("Response:", error.response?.data);

    alert(
      error.response?.data?.message ||
        error.message ||
        "Registration Failed"
    );
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

          <h1 className="text-5xl font-bold mt-6">Create Your Account</h1>

          <p className="mt-6 text-indigo-100 leading-relaxed">
            Join SchoolFix and help improve school infrastructure through
            transparent issue reporting and repair tracking.
          </p>

          <div className="mt-10 space-y-4">
            <div className="bg-white/10 p-4 rounded-2xl">
              📸 Upload issue photos
            </div>

            <div className="bg-white/10 p-4 rounded-2xl">
              📍 Track repair progress
            </div>

            <div className="bg-white/10 p-4 rounded-2xl">
              🔔 Get real-time notifications
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-12">
          <h2 className="text-4xl font-bold text-slate-900">Register</h2>

          <p className="text-slate-500 mt-2">Create your SchoolFix account.</p>

          <form onSubmit={handleSubmit} className="space-y-5 mt-8">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="text"
              name="schoolId"
              value={formData.schoolId}
              onChange={handleChange}
              placeholder="School ID"
              className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Role</option>
              <option value="Parent">Parent</option>
              <option value="Teacher">Teacher</option>
              <option value="Admin">Admin</option>
            </select>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>

          <p className="text-center text-slate-500 mt-6">
            Already have an account?
            <Link to="/login" className="text-indigo-600 font-medium ml-1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;
