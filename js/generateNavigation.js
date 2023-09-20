const PATHS = [
  { name: "About", url: "/" },
  { name: "Projects", url: "/projects" },
  { name: "Publications", url: "/publications" },
  { name: "Pottery", url: "/pottery" },
];

const getCurrentPath = () =>
  `/${window.location.pathname.replace(/\/$/, "").split("/").pop()}`;

document.write(
  `<nav>${PATHS.map(
    (page) =>
      `<a href="${page.url}" ${
        getCurrentPath() === page.url ? `class="selected"` : ""
      }>${page.name}</a>`
  ).join("")}</nav>`
);
