var $ = require("jquery");
import 'ion-rangeslider';

$(".range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 15000,
    from: 5000,
    to: 10000,
    hide_min_max: true,
    keyboard: true,
    values_separator: ' - ',
    prettify_enabled: true,
    postfix: '₽'
});