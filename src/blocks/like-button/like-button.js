function ChangeLike() {
    var likeButton = document.querySelectorAll('.like-button');
    if (likeButton.length) {
        Array.prototype.forEach.call(likeButton, function (element) {
            element.addEventListener('click', function () {
                const icon = element.querySelector('.like-button__icon');
                const input = element.querySelector('.like-button__input');

                // меняем иконку
                if (icon.classList.contains('like-button__icon_active')) {
                    icon.classList.remove('like-button__icon_active');
                    icon.innerHTML = 'favorite_border';
                } else {
                    icon.classList.add('like-button__icon_active');
                    icon.innerHTML = 'favorite';
                }

                // пересчитываем лайки
                if (input.classList.contains('like-button__input_active')) {
                    input.classList.remove('like-button__input_active');
                    let atr = input.getAttribute('value');
                    atr--;
                    input.setAttribute('value', atr);
                } else {
                    input.classList.add('like-button__input_active');
                    let atr2 = input.getAttribute('value');
                    atr2++;
                    input.setAttribute('value', atr2);
                }

                // меняем цвет бордера кнопки
                if (element.classList.contains('like-button_active')) {
                    element.classList.remove('like-button_active');
                } else {
                    element.classList.add('like-button_active');
                }
            });
        });

    }
}

document.addEventListener('DOMContentLoaded', ChangeLike);