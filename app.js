const prevElement = document.querySelector(".arrow-left");
const nextElement = document.querySelector(".arrow-right");
const pageOneElement = document.querySelector(".one");
const pageTwoElement = document.querySelector(".two");

function showSidebar() {
  const sidebar = document.querySelector(".info-sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".info-sidebar");
  sidebar.style.display = "none";
}
