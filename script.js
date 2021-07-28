document.addEventListener('DOMContentLoaded', function() {

    const navInit = () => {
        const nav = document.querySelector('.nav'); // ищем блок навигации
        const links = document.querySelectorAll('.nav__li'); // ищем все навигационные ссылки
        const sections = document.querySelectorAll('.section'); // ищем все секции
        // localStorage.setItem("where", window.pageYOffset);
        document.cookie="where="+window.pageYOffset;
        console.log("Запомнили новое положение", document.cookie.split(";")[1].split("=")[1]);
    }
    navInit() // запускаем функцию при загрузке страницы
    window.addEventListener('scroll', () => {
        navInit(); // запускаем функцию при скролле страницы
    })
    // window.addEventListener('resize', () => {
    //     navInit() // запускаем функцию при ресайзе страницы
    // })
})

document.onreadystatechange = function () {
    // let pos = localStorage.getItem("where");
    let pos = document.cookie.split(";")[1].split("=")[1];
    window.scroll(0, pos);
    console.log("Открутили", pos);
    // window.scrollTo(0, document.cookie);
}