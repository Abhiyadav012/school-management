import { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaTools,
  FaUserCog,
  FaClipboardList,
} from "react-icons/fa";

import { getAllIssues } from "../services/issueService";

function Tracking() {
  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(null);

  useEffect(() => {
    loadIssues();
  }, []);

  const loadIssues = async () => {
    try {
      const data = await getAllIssues();

      setIssues(data.issues);

      if (data.issues.length > 0) {
        setSelectedIssue(data.issues[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const issue = selectedIssue;

  const steps = issue
    ? [
        {
          title: "Issue Reported",
          time: new Date(issue.createdAt).toLocaleString(),
          icon: <FaClipboardList />,
          active: true,
        },
        {
          title: "Assigned to Staff",
          time:
            issue.status === "In Progress" ||
            issue.status === "Resolved"
              ? "Completed"
              : "Pending",
          icon: <FaUserCog />,
          active:
            issue.status === "In Progress" ||
            issue.status === "Resolved",
        },
        {
          title: "Repair In Progress",
          time:
            issue.status === "In Progress" ||
            issue.status === "Resolved"
              ? "Work Started"
              : "Pending",
          icon: <FaTools />,
          active:
            issue.status === "In Progress" ||
            issue.status === "Resolved",
        },
        {
          title: "Issue Resolved",
          time:
            issue.status === "Resolved"
              ? "Completed"
              : "Pending",
          icon: <FaCheckCircle />,
          active: issue.status === "Resolved",
        },
      ]
    : [];

  return (
        <section className="min-h-screen bg-slate-50 pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center">
          <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
            Issue Tracking
          </span>

          <h1 className="text-5xl font-bold text-slate-900 mt-4">
            Repair Progress Tracker
          </h1>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Monitor every stage of the repair process with complete transparency
            and real-time updates.
          </p>
        </div>

        {/* All Issues */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {issues.map((item) => (
            <div
              key={item._id}
              onClick={() => setSelectedIssue(item)}
              className={`cursor-pointer rounded-2xl border p-5 transition ${
                issue?._id === item._id
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-slate-200 bg-white hover:border-indigo-500 hover:shadow-lg"
              }`}
            >
              <h3 className="font-bold text-lg">{item.title}</h3>

              <p className="text-slate-500 mt-2">{item.location}</p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-slate-500">
                  {item.category}
                </span>

                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    item.status === "Resolved"
                      ? "bg-green-100 text-green-700"
                      : item.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {issue && (
          <>
            {/* Issue Details */}
            <div className="mt-10 bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold">{issue.title}</h2>

                  <p className="text-slate-500 mt-2">
                    {issue.location} • {issue.category}
                  </p>
                </div>

                <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium">
                  {issue.status}
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-3xl p-6 border shadow-sm">
                <p className="text-slate-500">Issue ID</p>
                <h3 className="text-2xl font-bold mt-2">
                  #{issue._id.slice(-6).toUpperCase()}
                </h3>
              </div>

              <div className="bg-white rounded-3xl p-6 border shadow-sm">
                <p className="text-slate-500">Category</p>
                <h3 className="text-2xl font-bold mt-2 text-indigo-600">
                  {issue.category}
                </h3>
              </div>

              <div className="bg-white rounded-3xl p-6 border shadow-sm">
                <p className="text-slate-500">Reported On</p>
                <h3 className="text-2xl font-bold mt-2">
                  {new Date(issue.createdAt).toLocaleDateString()}
                </h3>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-12 bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold mb-8">
                Repair Timeline
              </h2>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-xl ${
                          step.active
                            ? "bg-indigo-600"
                            : "bg-slate-300"
                        }`}
                      >
                        {step.icon}
                      </div>

                      {index !== steps.length - 1 && (
                        <div className="w-1 h-20 bg-slate-200"></div>
                      )}
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">
                        {step.title}
                      </h3>

                      <p className="text-slate-500 mt-1">
                        {step.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Tracking;