function floatRating() {
    let starRating = document.querySelectorAll('.star-rating-floating');
    if (starRating.length) {
        Array.prototype.forEach.call(starRating, function (element) {
            let ratingElem = element.querySelector('.star-rating__current')
            let rating = ratingElem.dataset.rating
            let icon = ratingElem.querySelectorAll('.star-rating__icon');
            let iconLength = icon.length
            let starCurrentWidth = (rating / iconLength) * 100;
            let starPercentage = `${starCurrentWidth.toFixed(1)}%`
            ratingElem.style.width = starPercentage;
        });
    }
}

document.addEventListener('DOMContentLoaded', floatRating);