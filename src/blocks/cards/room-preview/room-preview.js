import 'slick-carousel';
import json from './rooms.json';
//import '../../star-rating'

$('.room-preview__slider').slick();

function drawRoomsPreview(element, object) {
    let wrap = document.querySelector(element)

    for (const i in object) {
        const element = object[i];

        let item = document.createElement("div")
        item.className = "room-preview"
        wrap.appendChild(item)

        // .room-preview__slider
        let slider = document.createElement("div")
        slider.className = "room-preview__slider"
        item.appendChild(slider)

        let imageSlider = document.createElement("div")
        imageSlider.className = "image-slider"
        slider.appendChild(imageSlider)

        let images = element.images

        for (const j in images) {
            const img = images[j];
            let imageSliderItem = document.createElement("img")
            imageSliderItem.setAttribute("src", img.src)
            imageSlider.appendChild(imageSliderItem)
        }


        // .room-preview__header
        let roomPreviewHeader = document.createElement("div")
        roomPreviewHeader.className = "room-preview__header"
        item.appendChild(roomPreviewHeader)

        let roomPreviewNumberGroup = document.createElement("div")
        roomPreviewNumberGroup.className = "room-preview__number-group"
        roomPreviewHeader.appendChild(roomPreviewNumberGroup)

        let roomPreviewNumber = document.createElement("span")
        roomPreviewNumber.className = "room-preview__number"
        roomPreviewNumber.innerHTML = "№"
        roomPreviewNumberGroup.appendChild(roomPreviewNumber)

        let roomPreviewNumberItem = document.createElement("span")
        roomPreviewNumberItem.className = "room-preview__number-item"
        roomPreviewNumberItem.innerText = element.number
        roomPreviewNumberGroup.appendChild(roomPreviewNumberItem)

        let roomPreviewNumberCategory = document.createElement("span")
        roomPreviewNumberCategory.className = "room-preview__number-category"
        roomPreviewNumberCategory.innerText = element.type
        roomPreviewNumberGroup.appendChild(roomPreviewNumberCategory)

        let roomPreviewNumberCategoryPriceGroup = document.createElement("div")
        roomPreviewNumberCategoryPriceGroup.className = "room-preview__number-price-group"
        roomPreviewHeader.appendChild(roomPreviewNumberCategoryPriceGroup)

        let price = element.price.toLocaleString('ru-RU')

        let roomPreviewNumberPrice = document.createElement("span")
        roomPreviewNumberPrice.className = "room-preview__number-price"
        roomPreviewNumberPrice.innerHTML = price
        roomPreviewNumberCategoryPriceGroup.appendChild(roomPreviewNumberPrice)

        let roomPreviewNumberCurrencyType = document.createElement("span")
        roomPreviewNumberCurrencyType.className = "room-preview__number-currency-type"
        roomPreviewNumberCurrencyType.innerText = element.currency
        roomPreviewNumberCategoryPriceGroup.appendChild(roomPreviewNumberCurrencyType)

        let roomPreviewNumberPerDay = document.createElement("span")
        roomPreviewNumberPerDay.className = "room-preview__number-per-day"
        roomPreviewNumberPerDay.innerText = element.days
        roomPreviewNumberCategoryPriceGroup.appendChild(roomPreviewNumberPerDay)

        // .room-preview__rating-group
        let roomPreviewRatingGroup = document.createElement("div")
        roomPreviewRatingGroup.className = "room-preview__rating-group"
        item.appendChild(roomPreviewRatingGroup)

        let starRating = document.createElement("div")
        starRating.className = "room-preview__star-rating star-rating"
        roomPreviewRatingGroup.appendChild(starRating)

        let roundRating = Math.round(element.current_rating)
        let count = 1
        while (count <= element.scale) {
            if (count <= roundRating) {
                let elem = document.createElement("i")
                elem.className = "material-icons star-rating__icon"
                elem.innerText = "star"
                elem.setAttribute("data-value", `${count + 1}`)
                starRating.appendChild(elem)
            } else {
                let elem = document.createElement("i")
                elem.className = "material-icons star-rating__icon"
                elem.innerText = "star_border"
                elem.setAttribute("data-value", `${count + 1}`)
                starRating.appendChild(elem)
            }
            count++
        }

        // .room-preview__rating
        let roomPreviewRating = document.createElement("div")
        roomPreviewRating.className = "room-preview__rating"
        roomPreviewRatingGroup.appendChild(roomPreviewRating)

        let roomPreviewNumberRatingCount = document.createElement("span")
        roomPreviewNumberRatingCount.className = "room-preview__rating-count"
        roomPreviewNumberRatingCount.innerText = element.number_of_ratings
        roomPreviewRating.appendChild(roomPreviewNumberRatingCount)

        let roomPreviewNumberRatingInfo = document.createElement("span")
        roomPreviewNumberRatingInfo.className = "room-preview__rating-info"
        roomPreviewNumberRatingInfo.innerText = "Отзывов"
        roomPreviewRating.appendChild(roomPreviewNumberRatingInfo)
    }
}

drawRoomsPreview('.rooms', json)