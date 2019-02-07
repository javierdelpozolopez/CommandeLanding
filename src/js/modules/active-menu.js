const menu = document.getElementById('main-menu')

export const activeMenu = () => {
  if (menu) {
      const links = Array.from(menu.querySelectorAll('a'))
      links.map(link => {
          if (link.href === location.href || link.href === location.href.slice(0,-1)) link.classList.add('active')
      })
  }
}

const hamburgerMenuBox = document.getElementById('js-hamburger-box');
const hamburgerMenu = document.createElement('div');
hamburgerMenu.classList.add('mdc-button');

const iconMenu = new Image();
iconMenu.src = './assets/img/ic_menu_white_36pt.png';

hamburgerMenu.innerHTML = `
<img src="${iconMenu.src}" alt="Menu"/>
`;

if(window.innerWidth < 950){
    hamburgerMenuBox.appendChild(hamburgerMenu)
}
const injectMenu = innerWidth => {
    if(innerWidth < 950){
        hamburgerMenuBox.appendChild(hamburgerMenu)
    }else {
        hamburgerMenuBox.innerHTML = ``
    }
}

const callMenu = () => {
    menu.classList.toggle('main-menu__active')
}

if(hamburgerMenuBox){
    window.addEventListener('resize', e => {
        injectMenu(window.innerWidth)
    })
    hamburgerMenuBox.addEventListener('click', (e) =>{
        callMenu()
    })
}