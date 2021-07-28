document.addEventListener('DOMContentLoaded', function() {

    const navInit = () => {
        const nav = document.querySelector('.nav') // ищем блок навигации
        const links = document.querySelectorAll('.nav__li') // ищем все навигационные ссылки
        const sections = document.querySelectorAll('.section') // ищем все секции
        localStorage.setItem("where", document.cookie)
        console.log(window.pageYOffset);
        console.log(document.cookie);
    }
    navInit() // запускаем функцию при загрузке страницы
    window.addEventListener('scroll', () => {
        navInit() // запускаем функцию при скролле страницы
    })
    window.addEventListener('resize', () => {
        navInit() // запускаем функцию при ресайзе страницы
    })
})

document.onreadystatechange = function () {
    let pos = localStorage.getItem("where");
    window.scrollTo(0, pos)
    console.log("Открутили", pos);
    // window.scrollTo(0, document.cookie);
}