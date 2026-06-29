import { Link } from "react-router-dom";
function Hero() {
  return (
    <section
      className="relative min-h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
        {/* Badge */}
        <div className="mb-6 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 backdrop-blur-sm">
          <p className="text-sm font-medium text-indigo-200">
            School Facility Management Portal
          </p>
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl text-5xl font-extrabold text-white md:text-7xl">
          Report.
          <br />
          Track.
          <br />
          Resolve.
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-lg text-slate-200">
          A transparent platform that empowers parents, teachers and school
          administrators to report infrastructure issues and monitor repairs in
          real time.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/report-issue"
            className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
          >
            Report an Issue
          </Link>

          <Link
            to="/tracking"
            className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Track Repairs
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-white/10 p-6 backdrop-blur-md">
            <h2 className="text-3xl font-bold text-white">250+</h2>
            <p className="text-slate-200">Issues Reported</p>
          </div>

          <div className="rounded-xl bg-white/10 p-6 backdrop-blur-md">
            <h2 className="text-3xl font-bold text-emerald-400">95%</h2>
            <p className="text-slate-200">Resolved Issues</p>
          </div>

          <div className="rounded-xl bg-white/10 p-6 backdrop-blur-md">
            <h2 className="text-3xl font-bold text-blue-400">50+</h2>
            <p className="text-slate-200">Schools Covered</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
