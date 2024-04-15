document.write(`<footer>
  <small>&copy; ${new Date().getFullYear()} Michael Barlow</small>
  <nav id="social-icons" aria-label="Social">
    <a href="https://github.com/Michael-JB"
      ><img class="icon" src="/icons/github.svg"
    /></a>
    <a href="https://www.thingiverse.com/michael__b"
      ><img class="icon" src="/icons/thingiverse.svg"
    /></a>
    <a href="https://www.linkedin.com/in/michael-barlow-0252b224a/"
      ><img class="icon" src="/icons/linkedin.svg"
    /></a>
    <a href="" id="email-anchor"><img class="icon" src="/icons/email.svg" /></a>
  </nav>
</footer>`);

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
