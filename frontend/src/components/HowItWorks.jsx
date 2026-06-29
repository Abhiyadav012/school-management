import StepCard from "./StepCard";

function HowItWorks() {
  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center">
          <span className="px-5 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
            Workflow
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-center text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Simple Process.
          <span className="block text-indigo-600">
            Fast Resolution.
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-center text-lg text-slate-600 max-w-3xl mx-auto">
          Report issues, monitor repair progress and ensure every
          infrastructure problem gets resolved transparently.
        </p>

        {/* Workflow */}
        <div className="relative mt-10">

          {/* Connecting Line */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-500 rounded-full"></div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">

            <StepCard
              number="01"
              title="Report Issue"
              description="Parents and teachers submit infrastructure issues with descriptions and images."
            />

            <StepCard
              number="02"
              title="Track Progress"
              description="Monitor repair activities and receive updates as work progresses."
            />

            <StepCard
              number="03"
              title="Issue Resolved"
              description="School management completes repairs and closes the issue transparently."
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;