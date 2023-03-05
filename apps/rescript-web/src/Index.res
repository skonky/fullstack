let title = "Next.JS + Rescript"
let intro = "ReScript is a robustly typed language that compiles to efficient and human-readable JavaScript. It comes with a lightning fast compiler toolchain that scales to any codebase size."
let buttonLabel = "Get started"

let default = () =>
  <div className="hero min-h-screen">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold"> {title->React.string} </h1>
        <p className="py-6"> {intro->React.string} </p>
        <button className="btn btn-primary"> {buttonLabel->React.string} </button>
      </div>
    </div>
  </div>
