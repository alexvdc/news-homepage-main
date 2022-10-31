const menuOpen = document.querySelector(".header__menu--open")
const menuClose = document.querySelector(".header__menu--close")
const menuMobile = document.querySelector(".header__list")
const filter = document.querySelector(".filter")

menuOpen.addEventListener("click", () => {
    menuMobile.classList.add("header__list--mobile")
    menuOpen.style.display = "none"
    menuClose.style.display = "block"
    filter.style.display = "block"
    document.body.style.overflowY = document.body.style.overflowY === "hidden" ? "visible" : "hidden"
})

menuClose.addEventListener("click", () => {
    menuMobile.classList.remove("header__list--mobile")
    menuOpen.style.display = "block"
    menuClose.style.display = "none"
    filter.style.display = "none"
    document.body.style.overflowY = document.body.style.overflowY === "hidden" ? "visible" : "hidden"
})