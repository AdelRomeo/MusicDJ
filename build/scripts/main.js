const myBody = document.querySelector('body');

const burger = document.querySelector('.main-header_burger');
const links = document.querySelectorAll('.main-nav_item');

function f(link) {
    return new Promise((resolve) => { // создание промиса
        setTimeout(()=>{ // запуск таймаута
            if (document) { // проверка существует ли document
                resolve(); // разрешение промиса
                link.style.opacity = '1';  // изменение прозрачности
            }
        }, 800); // таймер между промисами
    });
}

f(links[0]) // вызов функции
    .then(() => { // это происходит когда наступает resolve()
        console.log('dada');
        return f(links[1]); // возврат нового промиса
    })
    .then(() => {
        console.log('dada');
        return f(links[2]);
    })
    .then(() => {
        console.log('dada');
        return f(links[3]);
    })
    .then(() => {
        console.log('dada');
        return f(links[4]);
    })
    .then(() => {
        console.log('dada');
        return f(links[5]);
    })
    .then(() => {
        console.log('dada');
        return f(links[6]);
    })
    .then(() => {
        console.log('dada');
        return f(links[7]);
    });
//--------------------------------------

let list = document.querySelectorAll('.main-nav_item button');
let header = document.querySelector('.main-header');

if (screen.width > 1537){
    header.addEventListener('click', (e)=>{
        if (e.target === list[0]){
            window.scrollTo(0,0);
        }
        if (e.target === list[1]){
            window.scrollTo(0,900);
        }
        if (e.target === list[2]){
            window.scrollTo(0,2970);
        }
        if (e.target === list[3]){
            window.scrollTo(0,4420);
        }
        if (e.target === list[4]){
            window.scrollTo(0,6835);
        }
        if (e.target === list[5]){
            window.scrollTo(0,7910);
        }
        if (e.target === list[6]){
            window.scrollTo(0,9265);
        }
        if (e.target === list[7]){
            window.scrollTo(0,100000);
        }
    });
}
