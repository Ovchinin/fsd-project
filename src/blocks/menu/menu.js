import './menu.scss'
import json from '../headersAndFooters/header/main-menu.json'

// let nav = [
//     {
//         label: "О нас",
//         link: "#1",
//     },
//     {
//         label: "Услуги",
//         children: [
//             {
//                 label: "Услуга 1",
//                 link: "#4",
//             },
//             {
//                 label: "Услуга 2",
//                 link: "#5",
//             },
//         ]
//     },
//     {
//         label: "Вакансии",
//         link: "#2",
//     },
//     {
//         label: "Новости",
//         link: "#3",
//     },
//     {
//         label: "Соглашения",
//         children: [
//             {
//                 label: "Соглашение 1",
//                 link: "#6",
//             },
//             {
//                 label: "Соглашение 2",
//                 link: "#7",
//             },
//         ]
//     },
// ]
let nav = json

function drawMainMenu(element, object) {

    let wrap = document.querySelector(element)
    let navList = document.createElement("ul")
    navList.className = "nav__list"
    wrap.appendChild(navList)

    for (const i in object) {
        let element = object[i];

        if (!element.children) {
            let li = document.createElement("li")
            li.className = "nav__list-item"
            li.innerHTML = `<a href="${element.link}" class="nav__link">${element.label}</a>`
            navList.appendChild(li)
        } else {
            let li = document.createElement("li")
            li.className = "nav__list-item nav__list-item--sub-menu"
            li.innerHTML = `
                <button class="nav__link">${element.label}</button>
                <i class="nav__list-item--dropdwn-list-icon">expand_more</i>
            `
            navList.appendChild(li)

            let ul = document.createElement("ul")
            ul.className = "nav__sub-menu-list"
            li.appendChild(ul)

            let subItems = element.children

            for (let i in subItems) {
                let subItem = subItems[i];
                let li = document.createElement("li")
                li.className = "sub-menu__list-item"
                li.innerHTML = `<a href="${subItem.link}" class="sub-menu__link">${subItem.label}</a>`
                ul.appendChild(li)
            }
        }
    }
}

drawMainMenu(".main-menu", nav)
drawMainMenu(".second-menu", nav)