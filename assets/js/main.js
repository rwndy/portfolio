// Select items
const menu_btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menu_nav = document.querySelector('.menu-nav');
const menu_branding = document.querySelector('.menu-branding');
const nav_items = document.querySelectorAll('.nav-item');

// mengatur awal menu
let show_menu = false;

menu_btn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!show_menu) {
    menu_btn.classList.add('close');
    menu.classList.add('show');
    menu_nav.classList.add('show');
    menu_branding.classList.add('show');
    nav_items.forEach(item => item.classList.add('show'));

    // mengatur status menu
    show_menu = true;
  } else {
    menu_btn.classList.remove('close');
    menu.classList.remove('show');
    menu_nav.classList.remove('show');
    menu_branding.classList.remove('show');
    nav_items.forEach(item => item.classList.remove('show'));

    // mengatur status menu
    show_menu = false;
  }
}


