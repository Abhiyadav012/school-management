import {
  FaSchool,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-300">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center">
                <FaSchool className="text-white text-xl" />
              </div>

              <h2 className="text-3xl font-bold text-white">
                SchoolFix
              </h2>
            </div>

            <p className="mt-5 leading-8 text-slate-400">
              SchoolFix is a smart school infrastructure management platform
              that enables parents, teachers and administrators to report,
              track and resolve facility issues with complete transparency.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">

              <a
                href="https://github.com/Abhiyadav012"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/abhishek-01-mern-dev/"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-pink-600 flex items-center justify-center transition duration-300"
              >
                <FaInstagram />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/"
                  className="hover:text-indigo-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/report-issue"
                  className="hover:text-indigo-400 transition"
                >
                  Report Issue
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard"
                  className="hover:text-indigo-400 transition"
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-indigo-400 transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/admin"
                  className="hover:text-indigo-400 transition"
                >
                  Admin
                </Link>
              </li>

            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Our Services
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>Issue Reporting</li>
              <li>Repair Tracking</li>
              <li>Real-Time Notifications</li>
              <li>Admin Management</li>
              <li>Performance Dashboard</li>

            </ul>

          </div>

          {/* Contact & Newsletter */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Stay Connected
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-indigo-400" />
                <span>abhisekyadav03017@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-indigo-400" />
                <span>+91 79798 61261</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-indigo-400" />
                <span>Patna, Bihar, India</span>
              </div>

            </div>

            {/* Newsletter */}
            <div className="mt-8">

              <p className="font-medium text-white mb-3">
                Subscribe for Updates
              </p>

              <div className="flex">

                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 rounded-l-xl bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-indigo-500"
                />

                <button className="px-5 bg-indigo-600 rounded-r-xl hover:bg-indigo-700 transition">
                  <FaArrowRight className="text-white" />
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-500 text-center md:text-left">
            © 2026 SchoolFix. All Rights Reserved.
          </p>

          <p className="text-slate-500 text-center md:text-right">
            Built with ❤️ using React & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;

