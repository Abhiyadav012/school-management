import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createIssue } from "../services/issueService";

function ReportIssue() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    category: "Furniture",
    location: "",
    priority: "Low",
    description: "",
  });

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

      await createIssue(formData);

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to submit issue");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="min-h-screen bg-slate-50 pt-28 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
            Issue Reporting
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            Report School Infrastructure Issues
          </h1>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Help maintain a safe and better learning environment by reporting
            infrastructure problems quickly and efficiently.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="mt-12 bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100"
        >
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Issue Title
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Broken classroom bench"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option>Furniture</option>
                <option>Electrical</option>
                <option>Toilet</option>
                <option>Sanitation</option>
                <option>Classroom</option>
              </select>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Location
              </label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Classroom 10A"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Priority
              </label>

              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6">
            <label className="block mb-2 font-medium text-slate-700">
              Description
            </label>

            <textarea
              rows="5"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the issue in detail..."
              className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Upload */}
          <div className="mt-6">
            <label className="block mb-2 font-medium text-slate-700">
              Upload Image
            </label>

            <input
              type="file"
              className="w-full border border-dashed border-slate-300 rounded-xl px-4 py-4"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 bg-indigo-600 text-white py-4 rounded-xl font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Issue"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ReportIssue;
