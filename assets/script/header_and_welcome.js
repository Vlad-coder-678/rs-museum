const menu_open = document.getElementById("menu_open");
const menu_close = document.getElementById("menu_close");
const welcome_title = document.getElementById("welcome_title");
const welcome_menu = document.getElementById("welcome_menu");

function openMenu() {
  menu_open.classList.remove("visible");
  menu_open.classList.add("unvisible");

  menu_close.classList.remove("unvisible");
  menu_close.classList.add("visible");

  welcome_title.classList.remove("visible");
  welcome_title.classList.add("unvisible");

  welcome_menu.classList.remove("unvisible");
  welcome_menu.classList.add("visible");
}

function closeMenu() {
  menu_open.classList.remove("unvisible");
  menu_open.classList.add("visible");

  menu_close.classList.remove("visible");
  menu_close.classList.add("unvisible");

  welcome_title.classList.remove("unvisible");
  welcome_title.classList.add("visible");

  welcome_menu.classList.remove("visible");
  welcome_menu.classList.add("unvisible");
}

menu_open.addEventListener("click", openMenu);
menu_close.addEventListener("click", closeMenu);
