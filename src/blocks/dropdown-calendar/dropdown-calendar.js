var $ = require("jquery");
import 'air-datepicker'

const model = {
    wrapElem: '.dropdown-calendar',
    startElem: '.date-start',
    endElem: '.date-end',
}

$(() => {
    let wrap = $(model.wrapElem);
    wrap.each(function () {
        let elem = $(this);
        let start = elem.find(model.startElem);
        let end = elem.find(model.endElem);

        start.datepicker({
            range: true,
            minDate: new Date(),
            clearButton: true,
            navTitles: {
                days: 'MM yyyy',
            },
            $body: '.dropdown-calendar',
            prevHtml: '<i class="material-icons">arrow_back</i>',
            nextHtml: '<i class="material-icons">arrow_forward</i>',
            multipleDatesSeparator: ' - ',
            onSelect: function (date) {
                const dates = date.split(' - ');
                $(start).val(dates[0]);
                $(end).val(dates[1]);
            },
            //inline: true,
        });

        elem.find(end).click(function () {
            $(start).data('datepicker').show();
        });
    })


    // Cоздание и добавление кнопки "применить"
    let datepickersContainer = $('.datepickers-container');
    datepickersContainer.each(function () {
        let elem = $(this);
        let buttonBlock = elem.find('.datepicker--buttons');
        let submitButton = $('<span class="datepicker--btn button-link" data-action="submit">Применить</span>');
        buttonBlock.append(submitButton);

        let dataPickerButton = elem.find('.datepicker--button');
        dataPickerButton.addClass('button-link');

        let btnSend = buttonBlock.find('.datepicker--btn[data-action="submit"]');
        btnSend.click(function () {
            $(model.startElem).each(function () {
                $(this).data('datepicker').hide();
            })
        })
    })
})