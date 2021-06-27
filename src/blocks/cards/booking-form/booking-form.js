const model = {
    wrapElem: '.booking-form',
    startElem: '.date-start',
    endElem: '.date-end',
    btn: '.datepickers-container'
}

// получаем NodeList с нужными елементами
let getAllElem = function (element) {
    let i = document.querySelectorAll(element);
    return i;
}

// преобразуем NodeList в массив
let elemFromNodeList = function (element) {
    let i = Array.from(element);
    return i;
}

// перебираем массив и ищем конкретный вложенный элемент
let getElement = function (arr, elem) {
    for (let index = 0; index < arr.length; index++) {
        let i = arr[index].querySelector(elem);
        return i;
    }
}

let a = getAllElem(model.wrapElem);
let b = elemFromNodeList(a);
let start = getElement(b, model.startElem);
let end = getElement(b, model.endElem);
let c = getAllElem(model.btn);
