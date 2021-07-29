function Rating() {
    let starRating = document.querySelectorAll('.star-rating');
    if (starRating.length) {
        Array.prototype.forEach.call(starRating, function (element) {
            element.addEventListener('click', function (event) {
                let dataAtr = event.target.dataset.value;
                let parent = event.target.parentElement;
                let icon = parent.querySelectorAll('.star-rating__icon');
                Array.prototype.forEach.call(icon, function (item) {
                    if (item.dataset.value <= dataAtr) {
                        item.innerHTML = 'star'
                    } else {
                        item.innerHTML = 'star_border'
                    }
                });
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', Rating);