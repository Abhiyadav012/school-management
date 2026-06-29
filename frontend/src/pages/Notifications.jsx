import {
  FaCheckCircle,
  FaTools,
  FaBell,
  FaClipboardList,
} from "react-icons/fa";

function Notifications() {
  const notifications = [
    {
      id: 1,
      title: "Issue Submitted",
      message: "Your issue 'Broken Classroom Bench' has been submitted successfully.",
      time: "2 minutes ago",
      icon: <FaClipboardList />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      title: "Repair Started",
      message: "Maintenance staff has started repairing your reported issue.",
      time: "1 hour ago",
      icon: <FaTools />,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      id: 3,
      title: "Issue Resolved",
      message: "Electrical wiring issue has been marked as resolved.",
      time: "Yesterday",
      icon: <FaCheckCircle />,
      color: "bg-green-100 text-green-600",
    },
    {
      id: 4,
      title: "New Update",
      message: "Admin updated the repair progress of your complaint.",
      time: "2 days ago",
      icon: <FaBell />,
      color: "bg-indigo-100 text-indigo-600",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-12">
          <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
            Notifications
          </span>

          <h1 className="text-5xl font-bold mt-4">
            Latest Updates
          </h1>

          <p className="text-slate-600 mt-4">
            Stay informed about your reported issues and repair progress.
          </p>
        </div>

        <div className="space-y-6">

          {notifications.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 hover:shadow-lg transition"
            >
              <div className="flex gap-5 items-start">

                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${item.color}`}
                >
                  {item.icon}
                </div>

                <div className="flex-1">
                  <div className="flex justify-between flex-wrap gap-2">
                    <h2 className="text-xl font-bold">
                      {item.title}
                    </h2>

                    <span className="text-sm text-slate-500">
                      {item.time}
                    </span>
                  </div>

                  <p className="text-slate-600 mt-2">
                    {item.message}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Notifications;