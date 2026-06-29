function CategoryCard({ icon, title }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">

      <div className="text-5xl mb-4 flex justify-center text-indigo-600">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-slate-900">
        {title}
      </h3>

    </div>
  );
}

export default CategoryCard;