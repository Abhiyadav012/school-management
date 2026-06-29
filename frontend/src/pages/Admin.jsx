import { FaTools, FaCheckCircle, FaClock } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getAllIssues, updateIssueStatus } from "../services/issueService";

function Admin() {
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

  const handleStatusChange = async (id, status) => {
    try {
      await updateIssueStatus(id, status);
      loadIssues();
    } catch (error) {
      console.log(error);
    }
  };

  const pending = issues.filter((i) => i.status === "Pending").length;
  const inProgress = issues.filter((i) => i.status === "In Progress").length;
  const resolved = issues.filter((i) => i.status === "Resolved").length;
  return (
    <section className="min-h-screen bg-slate-50 pt-28 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div>
          <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
            Administration
          </span>

          <h1 className="text-5xl font-bold text-slate-900 mt-4">
            Admin Panel
          </h1>

          <p className="text-slate-600 mt-3">
            Manage reported issues, assign repairs and monitor progress.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-6 rounded-3xl shadow-sm border">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Pending Issues</h3>
              <FaClock className="text-red-500 text-xl" />
            </div>

            <h2 className="text-4xl font-bold mt-4 text-red-500">{pending}</h2>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">In Progress</h3>
              <FaTools className="text-yellow-500 text-xl" />
            </div>

            <h2 className="text-4xl font-bold mt-4 text-yellow-500">
              {inProgress}
            </h2>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Resolved</h3>
              <FaCheckCircle className="text-emerald-500 text-xl" />
            </div>

            <h2 className="text-4xl font-bold mt-4 text-emerald-500">
              {resolved}
            </h2>
          </div>
        </div>

        {/* Issues Table */}
        <div className="mt-10 bg-white rounded-3xl shadow-sm border overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold">Reported Issues</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-4 text-left">Issue</th>
                  <th className="p-4 text-left">Location</th>
                  <th className="p-4 text-left">Priority</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Action</th>
                </tr>
              </thead>

              <tbody>
                {issues.map((issue) => (
                  <tr key={issue._id} className="border-t">
                    <td className="p-4 font-medium">{issue.title}</td>

                    <td className="p-4">{issue.location}</td>

                    <td className="p-4">
                      <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm">
                        {/* {issue.priority} */}
                        {issue.category}
                      </span>
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          issue.status === "Pending"
                            ? "bg-red-100 text-red-600"
                            : issue.status === "In Progress"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-green-100 text-green-600"
                        }`}
                      >
                        {issue.status}
                      </span>
                    </td>

                    <td className="p-4">
                      <select
                        value={issue.status}
                        onChange={(e) =>
                          handleStatusChange(issue._id, e.target.value)
                        }
                        className="border rounded-xl px-4 py-2"
                      >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Resolved">Resolved</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Admin;
