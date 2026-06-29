function FeatureCard({ icon, title, description }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
      {/* Top Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-100 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100"></div>

      {/* Icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-3xl text-indigo-600 transition group-hover:scale-110">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mb-3 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      {/* Description */}
      <p className="leading-relaxed text-slate-600">
        {description}
      </p>

      {/* Bottom Line */}
      <div className="mt-6 h-1 w-0 rounded-full bg-indigo-600 transition-all duration-300 group-hover:w-full"></div>

    </div>
  );
}

export default FeatureCard;