const myBody = document.querySelector('body');

const burger = document.querySelector('.main-header_burger');
const links = document.querySelectorAll('.main-nav_item');

function f(link) {
    return new Promise((resolve) => { // создание промиса
        setTimeout(()=>{ // запуск таймаута
            if (document) { // проверка существует ли document
                resolve(); // разрешение промиса
            }
        }, 800); // таймер между промисами
    });
}

f() // вызов функции
    .then(() => { // это происходит когда наступает resolve()
        links[0].style.opacity = '1'; // изменение прозрачности
        console.log('dada');
        return f(); // возврат нового промиса
    })
    .then(() => {
        links[1].style.opacity = '1';
        console.log('dada');
        return f();
    })
    .then(() => {
        links[2].style.opacity = '1';
        console.log('dada');
        return f();
    })
    .then(() => {
        links[3].style.opacity = '1';
        console.log('dada');
        return f();
    })
    .then(() => {
        links[4].style.opacity = '1';
        console.log('dada');
        return f();
    })
    .then(() => {
        links[5].style.opacity = '1';
        console.log('dada');
        return f();
    })
    .then(() => {
        links[6].style.opacity = '1';
        console.log('dada');
        return f();
    })
    .then(() => {
        links[7].style.opacity = '1';
        console.log('dada');
        return f();
    });
