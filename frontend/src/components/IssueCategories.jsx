import {
  FaCheckCircle,
} from "react-icons/fa";

function IssueCategories() {
  const issues = [
    "Broken Furniture",
    "Damaged Toilets",
    "Electrical Hazards",
    "Water Supply Issues",
    "Classroom Damage",
    "Poor Sanitation",
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
              Problems We Solve
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-6 leading-tight">
              Common School Infrastructure Problems
            </h2>

            <p className="text-slate-600 mt-6 text-lg leading-relaxed">
              SchoolFix helps schools identify, report and
              resolve infrastructure issues before they affect
              students' safety and learning experience.
            </p>

            <div className="mt-8 space-y-4">

              {issues.map((issue, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <FaCheckCircle className="text-emerald-500 text-xl" />

                  <span className="text-slate-700 font-medium">
                    {issue}
                  </span>
                </div>
              ))}

            </div>

            <button className="mt-10 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
              Learn More
            </button>

          </div>

          {/* Right Image */}
          <div>

            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop"
              alt="School Building"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default IssueCategories;