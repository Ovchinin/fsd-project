import './footer-menu.scss'
import objectMenu from './footer-menu.json'

let menu = objectMenu

function draw(object, element) {

    let wrap = document.querySelector(element)
    let navList = document.createElement("ul")
    navList.className = "menu__list"
    wrap.appendChild(navList)

    for (const i in object) {
        let element = object[i];

        let li = document.createElement("li")
        li.className = "menu__list-item"
        li.innerHTML = `<span class="menu__item-title h3">${element.label}</span>`
        navList.appendChild(li)

        let ul = document.createElement("ul")
        ul.className = "menu__sub-list"
        li.appendChild(ul)

        let subItems = element.children

        for (let i in subItems) {
            let subItem = subItems[i];
            let li = document.createElement("li")
            li.className = "menu__sub-list-item"
            li.innerHTML = `<a href="${subItem.link}" class="menu__sub-list-item-title">${subItem.label}</a>`
            ul.appendChild(li)
        }
    }
}

draw(menu, ".footer-menu")
