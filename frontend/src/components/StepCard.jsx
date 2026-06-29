function StepCard({ number, title, description }) {
  return (
    <div className="group relative rounded-3xl bg-white p-8 shadow-lg border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Number */}
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-2xl font-bold text-white shadow-lg transition group-hover:scale-110">
        {number}
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-relaxed text-slate-600">
        {description}
      </p>

      {/* Hover Line */}
      <div className="mt-6 h-1 w-0 rounded-full bg-indigo-600 transition-all duration-300 group-hover:w-full"></div>
    </div>
  );
}

export default StepCard;