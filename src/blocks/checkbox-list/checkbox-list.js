(function () {
    let dropdowns = document.querySelectorAll('.checkbox-list--dropwown');
    Array.prototype.forEach.call(dropdowns, dropdown => {

        dropdown.addEventListener('click', (event) => {
            let className = event.target.className;

            function showDropdownList() {
                let header = dropdown.querySelector('.checkbox-list__header');
                if (className == 'checkbox-list__header' ||
                    className == 'checkbox-list__title' ||
                    className == 'checkbox-list__icon') {
                    if (header.classList.contains('show')) {
                        header.classList.remove('show')
                    } else {
                        header.classList.add('show')
                    }
                }
            }
            showDropdownList();
        })
    })
})()