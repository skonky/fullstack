// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import Link from "next/link";

var links = [
  {
    href: "/",
    target: "_self",
    title: "Home"
  },
  {
    href: "/examples",
    target: "_self",
    title: "Examples"
  }
];

function MainLayout$Navigation(Props) {
  return React.createElement("div", {
              className: "navbar sticky top-0 z-10 bg-base-300"
            }, React.createElement("div", {
                  className: "flex-1"
                }, React.createElement("a", {
                      className: "btn btn-ghost normal-case text-xl"
                    }, "entergrade")), React.createElement("div", {
                  className: "flex-none"
                }, React.createElement("ul", {
                      className: "menu menu-horizontal px-1 gap-3"
                    }, links.map(function (link) {
                          return React.createElement("li", {
                                      key: link.href
                                    }, React.createElement(Link, {
                                          href: link.href,
                                          children: React.createElement("a", {
                                                className: "px-3"
                                              }, link.title)
                                        }));
                        }))));
}

function MainLayout(Props) {
  var children = Props.children;
  return React.createElement(React.Fragment, undefined, React.createElement(MainLayout$Navigation, {}), React.createElement("div", {
                  className: "w-full h-full font-base"
                }, React.createElement("main", undefined, children)));
}

var make = MainLayout;

export {
  make ,
  
}
/* react Not a pure module */
