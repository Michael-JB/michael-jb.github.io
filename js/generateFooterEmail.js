const emailElement = document.getElementById("email-anchor");
emailElement.onclick = () => {
  emailElement.href = [
    "o.uk",
    "un.c",
    "amy",
    "el@r",
    "micha",
    ":",
    "lto",
    "mai",
  ]
    .reverse()
    .join("");
  return true;
};
