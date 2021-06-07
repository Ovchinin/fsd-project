let userName = "Юлий Цезарь"


function drawAuthorization(element, authorization) {
    let navBars = document.querySelectorAll(element)
    Array.prototype.forEach.call(navBars, navBar => {

        if (!authorization) {
            // создаем блок кнопок
            let buttonBlock = document.createElement('div')
            buttonBlock.className = "button-block"

            // добавляем блок кнопок в хедер
            navBar.appendChild(buttonBlock)

            // добавляем кнопку "Войти" в блок кнопок
            let enterBtn = document.createElement("a")
            enterBtn.className = "button-border"
            enterBtn.innerHTML = "Войти"
            buttonBlock.appendChild(enterBtn)

            // добавляем кнопку "Зарегистрироваться" в блок кнопок
            let regBtn = document.createElement("a")
            regBtn.className = "button-full"
            regBtn.innerHTML = "Зарегистрироваться"
            buttonBlock.appendChild(regBtn)


        } else {
            // создаем блок авторизованного пользователя
            let block = document.createElement('div')
            block.className = "authorization-block"

            // добавляем ссылку на пользователя в хедер
            navBar.appendChild(block)

            // создаем ссылку user link
            let userBtn = document.createElement("a")
            userBtn.className = "user-link"
            userBtn.innerHTML = userName
            block.appendChild(userBtn)
        }
    })
}

drawAuthorization(".nav-bar", false)
drawAuthorization(".nav-bar--authorization", true)

