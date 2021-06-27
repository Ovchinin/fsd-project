(function () {
    let dropdowns = document.querySelectorAll('.dropdown-list');
    Array.prototype.forEach.call(dropdowns, dropdown => {

        function getItemValue() {
            let headerVal = '';
            let sumVal = 0;
            let facilities = ''
            let items = dropdown.querySelectorAll('.dropdown__item');
            Array.prototype.forEach.call(items, item => {
                let title = item.querySelector('.dropdown__item-title').innerHTML;
                let input = Number(item.querySelector('.input').value);
                sumVal += input;

                if (input > 0) {
                    facilities += input + ' ' + title + ', '
                }
                var sliced = facilities.slice(0, 20);
                if (sliced.length < facilities.length) {
                    sliced += '...';
                }
                facilities = sliced;
            })
            if (dropdown.classList.contains('dropdown--guest')) {
                if (sumVal == 0) {
                    headerVal += 'Укажите количество гостей';
                } else if (sumVal == 1) {
                    headerVal += sumVal + ' гость';
                } else if (sumVal > 1 && sumVal < 5) {
                    headerVal += sumVal + ' гостя';
                } else (
                    headerVal += sumVal + ' гостей'
                )
            } else if (dropdown.classList.contains('dropdown--facilities')) {
                headerVal = facilities;
            }

            return headerVal;
        }

        function applyButton() {
            let headerBlock = dropdown.querySelector('.dropdown__header');
            let apply = dropdown.querySelector('.dropdown__apply');
            let header = dropdown.querySelector('.dropdown__header-value');
            apply.addEventListener('click', function () {
                let itemVal = getItemValue();
                header.innerHTML = itemVal;
                headerBlock.classList.remove('show');
                headerBlock.style.borderRadius = '4px'
            });
        }
        applyButton()

        function clearButton() {
            let headerBlock = dropdown.querySelector('.dropdown__header');
            let header = dropdown.querySelector('.dropdown__header-value');
            let clearBtn = dropdown.querySelector('.dropdown__clear')
            let items = dropdown.querySelectorAll('.dropdown__item');
            Array.prototype.forEach.call(items, item => {
                clearBtn.addEventListener('click', function () {
                    item.querySelector('.input').value = "0";
                    header.innerHTML = header.dataset.title;
                    headerBlock.classList.remove('show');
                    headerBlock.style.borderRadius = '4px'
                });
            })
        }
        clearButton();

        dropdown.addEventListener('click', (event) => {
            let parent = event.target.parentElement;
            let input = parent.querySelector('.input');
            let className = event.target.className;

            function showDropdownList() {
                let header = dropdown.querySelector('.dropdown__header');
                if (className == 'dropdown__header' ||
                    className == 'dropdown__header-value' ||
                    className == 'dropdown__icon') {
                    if (header.classList.contains('show')) {
                        header.classList.remove('show')
                        header.style.borderRadius = '4px'
                    } else {
                        header.classList.add('show')
                        header.style.borderRadius = '4px 4px 0 0'
                    }
                }
            }
            showDropdownList();

            function changeInputValue() {
                if (className == 'plus') {
                    input.stepUp();
                    input.setAttribute('value', input.value)
                } else if (className == 'minus') {
                    input.stepDown();
                    input.setAttribute('value', input.value)
                }
            }
            changeInputValue();

            function setButtonStatus() {
                let items = dropdown.querySelectorAll('.dropdown__item');
                Array.prototype.forEach.call(items, item => {
                    let btnMinus = item.querySelector('.minus');
                    let btnPlus = item.querySelector('.plus')
                    let input = item.querySelector('.input');
                    let attrMin = input.getAttribute('min');
                    let attrMax = input.getAttribute('max');
                    let inputVal = input.value;
                    if (inputVal == attrMin) {
                        btnMinus.disabled = true;
                    } else if (inputVal == attrMax) {
                        btnPlus.disabled = true;
                    } else {
                        btnMinus.disabled = false;
                        btnPlus.disabled = false;
                    };
                })

            }
            setButtonStatus();

            function showBtn() {
                let blockButton = dropdown.querySelector('.dropdown__button-block');
                let sumVal = 0;
                let items = dropdown.querySelectorAll('.dropdown__item');
                Array.prototype.forEach.call(items, item => {
                    let input = item.querySelector('.input');
                    let inputVal = Number(input.value)
                    sumVal += inputVal;
                })
                if (sumVal > 0) {
                    blockButton.classList.add('open')
                } else {
                    blockButton.classList.remove('open')
                }
            }
            showBtn()
        })
    });
})()