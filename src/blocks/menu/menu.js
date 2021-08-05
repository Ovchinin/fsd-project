import './menu.scss'
import json from '../headersAndFooters/header/main-menu.json'

let nav = json

function drawMainMenu(element, object) {
    //let wrap = document.querySelector(element)
    let wraps = document.querySelectorAll(element)
    Array.prototype.forEach.call(wraps, wrap => {
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
    })
}

drawMainMenu(".main-menu", nav)
// drawMainMenu(".second-menu", nav)