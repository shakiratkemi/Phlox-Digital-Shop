document.getElementById("toggler").addEventListener("click", function () {
  let infoElements = document.querySelectorAll(".info-show");

  infoElements.forEach(function (element) {
    element.classList.toggle("active");
  });
});

let sections = document.querySelectorAll("section");

window.onScroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};
