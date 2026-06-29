import { Link } from "react-router-dom";
import FeatureCard from "./FeatureCard";
import {
  FaTools,
  FaClipboardCheck,
  FaBell,
  FaUserShield,
} from "react-icons/fa";

function Features() {
  return (
    <section className="py-14 md:py-16 px-6 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="px-5 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium text-sm">
            Core Features
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-center text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Smart School
          <span className="block text-indigo-600">
            Infrastructure Management
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-3xl mx-auto text-center text-lg text-slate-600 leading-relaxed">
          Report issues, track repairs, receive notifications and manage
          infrastructure maintenance from one centralized platform.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <Link to="/report-issue">
            <FeatureCard
              icon={<FaTools />}
              title="Report Issues"
              description="Quickly report infrastructure problems with images and descriptions."
            />
          </Link>

          <Link to="/tracking">
            <FeatureCard
              icon={<FaClipboardCheck />}
              title="Track Repairs"
              description="Monitor repair progress and updates in real time."
            />
          </Link>

          <Link to="/notifications">
            <FeatureCard
              icon={<FaBell />}
              title="Notifications"
              description="Receive instant alerts whenever issue status changes."
            />
          </Link>

          <Link to="/admin">
            <FeatureCard
              icon={<FaUserShield />}
              title="Admin Panel"
              description="Manage reports, assign tasks and monitor performance."
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Features;
