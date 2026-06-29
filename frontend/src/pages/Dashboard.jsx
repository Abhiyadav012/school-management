import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";
import { useEffect, useState } from "react";
import { getAllIssues } from "../services/issueService";
import { FaTools, FaClipboardCheck, FaBell, FaChartLine } from "react-icons/fa";

function Dashboard() {
  const [issues, setIssues] = useState([]);

  const loadIssues = async () => {
    try {
      const data = await getAllIssues();
      setIssues(data.issues);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadIssues();
  }, []);

  const pending = issues.filter((issue) => issue.status === "Pending").length;

  const inProgress = issues.filter(
    (issue) => issue.status === "In Progress",
  ).length;

  const resolved = issues.filter((issue) => issue.status === "Resolved").length;
  return (
    <section className="min-h-screen bg-slate-50 pt-28 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
              Dashboard Overview
            </span>

            <h1 className="text-5xl font-bold text-slate-900 mt-4">
              School Management Dashboard
            </h1>

            <p className="text-slate-600 mt-3 max-w-2xl">
              Monitor infrastructure issues, track repair progress and maintain
              transparency across your school.
            </p>
          </div>

          <Link
            to="/report-issue"
            className="mt-6 lg:mt-0 px-6 py-4 rounded-2xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition inline-block"
          >
            + Report New Issue
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <StatCard
            title="Total Issues"
            value={issues.length}
            color="text-indigo-600"
            icon={<FaChartLine />}
          />

          <StatCard
            title="Pending"
            value={pending}
            color="text-red-500"
            icon={<FaTools />}
          />

          <StatCard
            title="In Progress"
            value={inProgress}
            color="text-amber-500"
            icon={<FaClipboardCheck />}
          />

          <StatCard
            title="Resolved"
            value={resolved}
            color="text-emerald-500"
            icon={<FaBell />}
          />
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-6 mt-10">
          <Link
            to="/report-issue"
            className="group bg-white rounded-3xl p-6 border border-slate-200 hover:border-indigo-500 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <h3 className="font-bold text-lg">Report New Issue</h3>

            <p className="text-slate-500 mt-2">
              Submit infrastructure problems.
            </p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-indigo-600 font-semibold">Open</span>

              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </Link>

          <Link
            to="/tracking"
            className="group bg-white rounded-3xl p-6 border border-slate-200 hover:border-indigo-500 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <h3 className="font-bold text-lg">Track Repairs</h3>

            <p className="text-slate-500 mt-2">Monitor repair progress.</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-indigo-600 font-semibold">Open</span>

              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </Link>

          <Link
            to="/notifications"
            className="group bg-white rounded-3xl p-6 border border-slate-200 hover:border-indigo-500 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <h3 className="font-bold text-lg">Notifications</h3>

            <p className="text-slate-500 mt-2">View latest alerts.</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-indigo-600 font-semibold">Open</span>

              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </Link>

          <Link
            to="/admin"
            className="group bg-white rounded-3xl p-6 border border-slate-200 hover:border-indigo-500 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <h3 className="font-bold text-lg">Admin Panel</h3>

            <p className="text-slate-500 mt-2">Manage all reported issues.</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-indigo-600 font-semibold">Open</span>

              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </Link>
        </div>

        {/* Recent Issues */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Recent Issues
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {issues.length === 0 ? (
              <p className="text-slate-500">No issues reported yet.</p>
            ) : (
              issues.slice(0, 6).map((issue) => (
                <div
                  key={issue._id}
                  className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-lg">{issue.title}</h3>

                  <p className="text-slate-500 mt-2">{issue.location}</p>

                  <p className="text-sm text-slate-400 mt-2">
                    {issue.category}
                  </p>

                  <span
                    className={`inline-block mt-4 px-3 py-1 rounded-full text-sm font-medium ${
                      issue.status === "Pending"
                        ? "bg-red-100 text-red-600"
                        : issue.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-emerald-100 text-emerald-600"
                    }`}
                  >
                    {issue.status}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
