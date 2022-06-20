const hamburgerMenu = document.querySelector('.hamburger-menu');
console.log(hamburgerMenu);
const navigation = document.querySelector('.frame-navigation');

const closeMenu = document.querySelector('.close-menu');

const show =() => {
    navigation.setAttribute('data-visible', true)
    console.log(show)
}
hamburgerMenu.addEventListener('click', show);

console.log(show)