import React from 'react'

// Edit this array to update the section. Add or remove items freely.
const experiences = [
  {
    role: 'Full Stack Next.js Developer',
    company: 'CollegePur',
    mode: 'Remote',
    period: 'Aug 2026 – Present',
    current: true,
    summary:
      "Working on the company's Volunteer Management System (VMS), building the interface volunteers and admins use every day.",
    points: [
      'Develop and maintain responsive frontend interfaces for the VMS using Next.js and React.',
      'Turn UI/UX requirements from the design and backend teams into clean, reusable Tailwind CSS components.',
      'Debug component rendering and state-handling issues across Next.js modules to keep the UI stable.',
    ],
    stack: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Git'],
  },
  {
    role: 'Backend Developer',
    company: 'Axionix Technologies',
    mode: 'Remote',
    period: 'Aug 2026 – Present',
    current: true,
    summary:
      'Building the backend of an in-house product, from API design to the database layer behind it.',
    points: [
      'Build backend services and RESTful APIs in Node.js and Express.js, covering core business logic and data flow.',
      'Design MongoDB schemas and queries that keep data handling reliable and ready to scale.',
      'Test API endpoints with Postman and collaborate through Git workflows and code reviews.',
    ],
    stack: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Postman', 'Git'],
  },
]

// Same dot colors as the skill chips on the home page
const dotColors = ['bg-cyan-400', 'bg-purple-500', 'bg-orange-400']

const Experience = () => {
  return (
    <section
      id="Experience"
      className="relative overflow-hidden px-6 py-24 text-white"
    >
      {/* soft background glows, same purple / blue mood as the hero */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-3xl font-bold sm:text-5xl">
            <span className="bg-[linear-gradient(90deg,#f97316,#ec4899,#6366f1,#06b6d4)] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate-400 sm:text-lg">
            Two internships running side by side: one on the frontend, one on the backend.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute bottom-2 left-[11px] top-2 w-px bg-[linear-gradient(180deg,#f97316,#ec4899,#6366f1,#06b6d4)] opacity-60 sm:left-[15px]" />

          <ol className="space-y-10">
            {experiences.map((exp) => (
              <li key={exp.company} className="relative pl-10 sm:pl-14">
                {/* timeline dot */}
                <span className="absolute left-0 top-7 flex h-6 w-6 items-center justify-center rounded-full bg-[#0b0b1e] ring-2 ring-purple-500/60 sm:h-8 sm:w-8">
                  <span className="h-2.5 w-2.5 rounded-full bg-[linear-gradient(135deg,#f97316,#6366f1)] sm:h-3 sm:w-3" />
                </span>

                {/* Card */}
                <article className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20 backdrop-blur-md transition-colors duration-300 hover:border-purple-400/40 sm:p-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white sm:text-2xl">
                        {exp.role}
                      </h3>
                      <p className="mt-1 text-lg font-medium text-purple-300">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                      {exp.current && (
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                          </span>
                          Current
                        </span>
                      )}
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
                        {exp.mode}
                      </span>
                    </div>
                  </div>

                  <p className="mt-2 text-sm text-slate-400">{exp.period}</p>

                  <p className="mt-5 max-w-2xl leading-relaxed text-slate-300">
                    {exp.summary}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {exp.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 leading-relaxed text-slate-300"
                      >
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[linear-gradient(135deg,#f97316,#6366f1)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech chips, styled like the hero chips */}
                  <div className="mt-6 flex flex-wrap gap-2.5 border-t border-white/10 pt-6">
                    {exp.stack.map((tech, i) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-slate-200"
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${dotColors[i % dotColors.length]}`}
                        />
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Experience