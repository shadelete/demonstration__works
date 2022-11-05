$(function() {

	const hamburger = document.querySelector('.hamburger')
	const hamburgerIcon = document.querySelector('.hamburger > img')
	const navMenu = document.querySelector('.header__nav')

    const checkAtr = () => {
        return hamburgerIcon.getAttribute('src') === 'img/menu-close.svg'
        ? 'img/menu-open.svg'
        : 'img/menu-close.svg'
    }

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle('active-menu')
        hamburgerIcon.setAttribute('src',checkAtr())
        // navMenu.classList.toggle('header-menu-active')
    })

});
