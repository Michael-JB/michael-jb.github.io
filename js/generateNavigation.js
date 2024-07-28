const PATHS = [
  { name: "About", url: "/" },
  { name: "Publications", url: "/publications" },
  { name: "Software", url: "/software" },
  { name: "Pottery", url: "/pottery" },
];

const getCurrentPath = () =>
  `/${window.location.pathname.split("/")[1]}`;

document.write(
  `<nav>${PATHS.map(
    (page) =>
      `<a href="${page.url}" ${
        getCurrentPath() === page.url ? `class="selected"` : ""
      }>${page.name}</a>`
  ).join("")}</nav>`
);
