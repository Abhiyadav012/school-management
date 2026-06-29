import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="min-h-screen bg-slate-50 pt-28 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
            Contact Us
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mt-5">
            Let's Build Better Schools Together
          </h1>

          <p className="max-w-2xl mx-auto mt-5 text-lg text-slate-600">
            Have a question, suggestion or need support? Our team is always
            ready to help improve school infrastructure.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          <div className="bg-white rounded-3xl p-8 shadow-sm border hover:shadow-xl hover:-translate-y-2 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center">
              <FaEnvelope className="text-indigo-600 text-2xl" />
            </div>

            <h3 className="font-bold text-xl mt-6">Email</h3>

            <a
              href="mailto:support@schoolfix.com"
              className="hover:text-indigo-600"
            >
              abhisekyadav03017@gmail.com
            </a>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border hover:shadow-xl hover:-translate-y-2 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center">
              <FaPhoneAlt className="text-indigo-600 text-2xl" />
            </div>

            <h3 className="font-bold text-xl mt-6">Phone</h3>

            <a href="tel:+919876543210" className="hover:text-indigo-600">
              +91 79798 61261
            </a>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border hover:shadow-xl hover:-translate-y-2 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center">
              <FaMapMarkerAlt className="text-indigo-600 text-2xl" />
            </div>

            <h3 className="font-bold text-xl mt-6">Location</h3>

            <p className="text-slate-500 mt-2">Patna, Bihar, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-10 mt-16">
          <div className="bg-white rounded-3xl shadow-sm border p-10">
            <h2 className="text-3xl font-bold text-slate-900">
              Send us a Message
            </h2>

            <p className="text-slate-500 mt-3">
              Fill out the form and we'll get back to you soon.
            </p>

            <form className="space-y-5 mt-8">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-slate-200 rounded-xl px-5 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-slate-200 rounded-xl px-5 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-slate-200 rounded-xl px-5 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full border border-slate-200 rounded-xl px-5 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition">
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side */}
          <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-700 p-10 text-white flex flex-col justify-center">
            <h2 className="text-4xl font-bold">Need Immediate Help?</h2>

            <p className="mt-5 text-indigo-100 leading-8">
              Our SchoolFix support team is available to assist schools,
              teachers, parents and administrators regarding issue reporting,
              dashboard access and technical support.
            </p>

            <div className="mt-10 bg-white/10 rounded-2xl p-6 backdrop-blur">
              <h3 className="text-2xl font-semibold">Support Hours</h3>

              <p className="mt-4">Monday – Friday</p>

              <p>09:00 AM – 06:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
