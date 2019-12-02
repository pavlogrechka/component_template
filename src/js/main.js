const links = document.querySelectorAll(".main-nav__item");
console.log(links);
const changeActive = e => {
  [...links].forEach(link => link.classList.remove("active"));
  e.target.classList.add("active");
};

[...links].forEach(e => e.addEventListener("click", changeActive));
