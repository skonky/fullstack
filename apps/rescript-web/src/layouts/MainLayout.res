module Link = Next.Link

type link = {
  href: string,
  target: string,
  title: string,
}

module Navigation = {
  let title = "entergrade"
  let links: array<link> = [
    {
      href: "/",
      title: "Home",
      target: "_self",
    },
    {
      href: "/examples",
      title: "Examples",
      target: "_self",
    },
  ]

  @react.component
  let make = () =>
    <div className="navbar sticky bg-base-300">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl"> {title->React.string} </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-3">
          {links
          ->Js.Array2.map(link =>
            <li key=link.href>
              <Link href=link.href> <a className="px-3"> {link.title->React.string} </a> </Link>
            </li>
          )
          ->React.array}
        </ul>
      </div>
    </div>
}

@react.component
let make = (~children) => {
  <> <Navigation /> <div className="w-full font-base"> <main> children </main> </div> </>
}
