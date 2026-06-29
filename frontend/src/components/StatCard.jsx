function StatCard({ title, value, color, icon }) {
  return (
    <div className="bg-gradient-to-br from-white to-slate-100 rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">

      <div className="flex items-center justify-between">
        <p className="text-slate-500 font-medium">
          {title}
        </p>

        <div className={`text-2xl ${color}`}>
          {icon}
        </div>
      </div>

      <h2 className={`text-5xl font-bold mt-5 ${color}`}>
        {value}
      </h2>

      <div className="mt-5 h-1.5 w-16 rounded-full bg-slate-200"></div>

    </div>
  );
}

export default StatCard;