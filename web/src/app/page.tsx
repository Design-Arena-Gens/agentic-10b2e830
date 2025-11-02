import Link from "next/link";

const quickActions = [
  {
    title: "Launch a Workspace",
    description: "Spin up a fresh project in minutes with curated defaults.",
    href: "https://nextjs.org/docs",
  },
  {
    title: "Browse Templates",
    description: "Jump-start your build with production-ready blueprints.",
    href: "https://vercel.com/templates",
  },
  {
    title: "Learn the Stack",
    description: "Follow guided pathways to sharpen your Next.js skills.",
    href: "https://nextjs.org/learn",
  },
];

const milestones = [
  {
    label: "Ideate",
    detail: "Map the core problem, audience, and success signals.",
  },
  {
    label: "Prototype",
    detail: "Ship an interactive slice and collect real feedback.",
  },
  {
    label: "Iterate",
    detail: "Layer on automation, analytics, and polish.",
  },
  {
    label: "Launch",
    detail: "Deploy with confidence and celebrate the release.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-transparent to-purple-100/40 blur-3xl" />
      <main className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-20 px-6 py-16 sm:px-10">
        <header className="flex flex-col gap-6 sm:gap-8">
          <span className="inline-flex w-fit items-center rounded-full bg-blue-500/10 px-4 py-1 text-sm font-semibold text-blue-700 ring-1 ring-blue-500/20">
            Agentic Hub
          </span>
          <h1 className="text-pretty text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Launch ideas faster with a curated toolkit for ambitious teams.
          </h1>
          <p className="max-w-2xl text-pretty text-lg text-foreground/70 sm:text-xl">
            Organize your launch plan, streamline collaboration, and stay
            focused on outcomes. Agentic Hub brings the resources you need to go
            from insight to release without slowing down.
          </p>
          <div className="flex flex-col gap-3 text-sm font-medium sm:flex-row sm:gap-4">
            <Link
              href="https://vercel.com/new"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-base text-white shadow-sm transition hover:bg-blue-500"
            >
              Start Building
            </Link>
            <Link
              href="https://nextjs.org/showcase"
              className="inline-flex items-center justify-center rounded-full border border-blue-200 px-6 py-3 text-base text-blue-700 transition hover:border-blue-300 hover:bg-blue-50"
            >
              View Inspiration
            </Link>
          </div>
        </header>

        <section className="grid gap-6 rounded-3xl border border-white/60 bg-white/70 p-8 shadow-lg backdrop-blur sm:grid-cols-3 sm:gap-8">
          {quickActions.map((action) => (
            <Link
              key={action.title}
              href={action.href}
              className="group flex flex-col gap-3 rounded-2xl border border-transparent bg-white/60 p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <span className="text-sm font-semibold uppercase tracking-wide text-blue-500">
                {action.title}
              </span>
              <p className="text-sm text-foreground/70">{action.description}</p>
              <span className="mt-auto text-sm font-medium text-blue-600 group-hover:text-blue-500">
                Explore →
              </span>
            </Link>
          ))}
        </section>

        <section className="grid gap-10 rounded-3xl border border-zinc-200/80 bg-white/60 p-8 shadow-sm backdrop-blur sm:grid-cols-[1.15fr_1fr]">
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold text-foreground">
              A simple rhythm for momentum
            </h2>
            <p className="text-base text-foreground/70">
              Each milestone keeps your team aligned while leaving room for
              experimentation. Track progress visually and tailor the framework
              to match the scale of your launch.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-blue-200 bg-blue-50 px-5 py-4 text-sm text-blue-900">
                Save time with reusable templates for kickoff decks, roadmap
                briefs, and retrospectives.
              </div>
              <div className="rounded-2xl border border-purple-200 bg-purple-50 px-5 py-4 text-sm text-purple-900">
                Integrate with your existing stack using API-ready snippets and
                automation hooks.
              </div>
            </div>
          </div>
          <ol className="relative flex flex-col gap-6">
            <span className="absolute left-[14px] top-3 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-blue-400 to-purple-400" />
            {milestones.map((milestone) => (
              <li key={milestone.label} className="relative flex gap-4">
                <span className="relative z-10 mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-blue-200 bg-white text-sm font-semibold text-blue-600 shadow-sm">
                  {milestone.label[0]}
                </span>
                <div className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur">
                  <h3 className="text-sm font-semibold text-foreground">
                    {milestone.label}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/70">
                    {milestone.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <footer className="flex flex-col items-start gap-4 rounded-3xl border border-blue-200/70 bg-blue-600/90 px-8 py-10 text-white shadow-lg backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-semibold">Ready to ship?</h3>
            <p className="mt-2 max-w-xl text-sm text-blue-50">
              Drop Agentic Hub into your workflow and accelerate the path to
              launch day. We&apos;ll keep the runway clear so you can focus on
              impact.
            </p>
          </div>
          <Link
            href="https://vercel.com/changelog"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50"
          >
            Follow Updates
          </Link>
        </footer>
      </main>
    </div>
  );
}
