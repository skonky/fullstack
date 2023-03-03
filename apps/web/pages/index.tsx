export default function Web() {
  const skills = [
    "Frontend",
    "GraphQL",
    "TypeScript",
    "TRPC",
    "React",
    "Next.JS",
    "TailwindCSS",
    "Prisma",
    "Design Systems",
    "CSS",
    "HTML",
    "Redux",
    "Swagger",
    "OpenAPI",
    "Codegen",
    "Functional Programming",
    "Bitcoin",
  ] as const;

  return (
    <div className="container py-3 px-6">
      <header className="md:mt-40">
        <h1 className="text-6xl font-extrabold mb-1">Frank Selhorst</h1>
        <h2 className="max-w-lg text-4xl opacity-60 font-bold mb-3">
          I build things for the web.
        </h2>
      </header>
      <div className="flex gap-2 max-w-md flex-wrap">
        <p>TypeScript</p>
        <p>React</p>
        <p>TailwindCSS</p>
        <p>CSS</p>
        <p>HTML</p>
        <p>TRPC</p>
        <p>GraphQL</p>
        <p>Prisma</p>
        <p>REST</p>
        <p>Agile</p>
        <p>Scrum</p>
        <p>Jest</p>
        <p>Redux</p>
      </div>
      <div className="flex gap-3">
        <a
          href="mailto:info@frankselhorst.nl?subject=We need you!"
          className="mt-4 btn btn-primary btn-sm"
        >
          Hire me
        </a>
        <a
          href="https://linkedin.com/in/frankselhorst"
          target="_blank"
          className="mt-4 btn btn-ghost btn-sm"
          rel="noreferrer"
        >
          Connect with me
        </a>
      </div>
    </div>
  );
}
