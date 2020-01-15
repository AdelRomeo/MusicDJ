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
        return f(links[1]); // возврат нового промиса
    })
    .then(() => {
        return f(links[2]);
    })
    .then(() => {
        return f(links[3]);
    })
    .then(() => {
        return f(links[4]);
    })
    .then(() => {
        return f(links[5]);
    })
    .then(() => {
        return f(links[6]);
    })
    .then(() => {
        return f(links[7]);
    });
//--------------------------------------

let list = document.querySelectorAll('.main-nav_item button');
let header = document.querySelector('.main-header');

if (window.innerWidth > 1537){ // проверка на ширину окна
    header.addEventListener('click', (e)=>{ // e - то на что нажали
        if (e.target === list[0]){
            scrollToo(0); // вызов функции. в скобках до скольки скролить
        }
        if (e.target === list[1]){
            scrollToo(900);
        }
        if (e.target === list[2]){
            scrollToo(2960);
        }
        if (e.target === list[3]){
            scrollToo(4420);
        }
        if (e.target === list[4]){
            scrollToo(6835);
        }
        if (e.target === list[5]){
            scrollToo(7920);
        }
        if (e.target === list[6]){
            scrollToo(9245);
        }
        if (e.target === list[7]){
            scrollToo(10500);
        }
    });
}


function scrollToo(coordinate) { // универсальная функция для скролла
    let numb = window.pageYOffset; // положение страницы. на сколько проскролена. просто возвращает число

    if (numb > coordinate){ // если то положение страницы которое есть сейчас больше чем то которое нужно
        let timer = setInterval(()=>{ // запуск таймер
            numb -= 20; // уменьшение положения страницы. скрол вверх
            window.scrollTo(0,numb); // присваивание нового положения страницы
            if (numb <= coordinate){ // если дошло до нужного положения
                clearInterval(timer); // остановка таймера
            }
        }, 10); // интервал
    }
    if (numb < coordinate){ // если то положение страницы которое есть сейчас меньше чем то которое нужно
        let timer = setInterval(()=>{ // запуск таймер
            numb += 20; // увеличение положения страницы. скрол вниз
            window.scrollTo(0,numb); // присваивание нового положения страницы
            if (numb >= coordinate){ // если дошло до нужного положения
                clearInterval(timer); // остановка таймера
            }
        }, 10); // интервал
    }
}
// ----------------------

const menuVisual = document.querySelector('.main-header_burger'); // кнопка показа меню
const menu = document.querySelector('.container_main-mav'); // меню

menuVisual.addEventListener('click',()=>{ // добавление слушателя(обработчика)
    menu.classList.toggle('visual'); // переключение класса
    menuVisual.classList.toggle('btnUpDown'); // переключение класса
});
// ------------------------

const sliderLeft = document.querySelector('.slider_arrow-left'); // arrow left
const sliderRight = document.querySelector('.slider_arrow-right'); // arrow right
const slider = document.querySelector('.slider-container'); // container

let marg = 0; // положение контейнера по умолчанию. положение от 0 до -200 (3 блока. 0, -100, -200)

sliderLeft.addEventListener('click', ()=>{
    if (marg <= 0){ // если marg в минусе (контейнер сдвинут от положения по умолчанию)
        sliderRight.style.display = 'block'; // показывать правую кнопку
    } else { // если контейнер не сдвинут влево (положение по умолчанию)
        sliderRight.style.display = 'none'; // скрывать правую кнопку
    }
    if (marg <= -99){ // если marg меньше -99 (от -100 до -200) на экране последний правый блок
        sliderLeft.style.display = 'none'; // скрывать левую кнопку.
    } else { // иначе. если на экране средний или невый блок
        sliderLeft.style.display = 'block'; // показывать левую кнопку
    }
    marg += -100; // изменение marg
    slider.style.left = marg+'%'; // сдвиг контейнера влево
});

sliderRight.addEventListener('click', ()=>{
    if (marg >= -200){ // если marg больше -200 (от 0 до 199)
        sliderLeft.style.display = 'block'; // показывать левую кнопку
    }
    if (marg >= -101){
        sliderRight.style.display = 'none'; // скрытие правой кнопки когда контейнер в положении по умолчанию
    }
    marg += 100; // изменение marg
    slider.style.left = marg+'%'; // сдвиг контейнера в право
});



