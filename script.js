document.addEventListener('DOMContentLoaded', function() {
    const navInit = () => {
        alert("Загрузили страницу:"+localStorage.getItem("where"));
        console.log("Загрузили страницу:");
        document.addEventListener("touchmove", touchMove, false);
        const nav = document.querySelector('.nav'); // ищем блок навигации
        const links = document.querySelectorAll('.nav__li'); // ищем все навигационные ссылки
        const sections = document.querySelectorAll('.section'); // ищем все секции
        localStorage.setItem('where', window.pageYOffset.toString());
        // console.log("Запомнили новое положение", document.cookie.split(";")[1].split("=")[1]);
        console.log("Запомнили новое положение:", localStorage.getItem("where"));
    }

    window.addEventListener('scroll', () => {
        // alert("Двигаем1");
        navInit(); // запускаем функцию при скролле страниц
    })
    // window.addEventListener('resize', () => {
    //     navInit() // запускаем функцию при ресайзе страницы
    // })
})

function touchMove(event) {
    // document.cookie="where="+window.pageYOffset;
    // document.cookie=window.pageYOffset;
    localStorage.setItem('where:', window.pageYOffset.toString());
    // alert("Двигаем на айфоне"+localStorage.getItem("where"));
}

document.onreadystatechange = function () {
    // let pos = localStorage.getItem("where");
    // let pos = document.cookie;
    let pos = parseInt(localStorage.getItem("where"));
    window.scroll(0, pos);
    console.log("Открутили", pos);
    // window.scrollTo(0, document.cookie);
}