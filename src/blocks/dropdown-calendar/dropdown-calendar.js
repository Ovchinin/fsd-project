var $ = require("jquery");
import 'air-datepicker'

const model = {
    wrapElem: '.dropdown-calendar',
    startElem: '.date-start',
    endElem: '.date-end',
    inline_calendar: '.datepicker-inline',
}

$(() => {
    let wrap = $(model.wrapElem);
    wrap.each(function () {
        let elem = $(this);
        let start = elem.find(model.startElem);
        let end = elem.find(model.endElem);
        let elemChildrenLength = elem.children().length;


        if (elemChildrenLength > 1) {
            start.datepicker({
                //minDate: new Date(),
                clearButton: true,
                //inline: true,
                navTitles: {
                    days: 'MM yyyy',
                },
                prevHtml: '<i class="material-icons">arrow_back</i>',
                nextHtml: '<i class="material-icons">arrow_forward</i>',
                multipleDatesSeparator: ' - ',
                onSelect: function (date) {
                    const dates = date.split(' - ');
                    $(start).val(dates[0]);
                    $(end).val(dates[1]);
                },
            });

            elem.find(end).click(function () {
                $(start).data('datepicker').show();
            });
        } else {
            start.datepicker({
                //minDate: new Date(),
                clearButton: true,
                inline: true,
                navTitles: {
                    days: 'MM yyyy',
                },
                prevHtml: '<i class="material-icons">arrow_back</i>',
                nextHtml: '<i class="material-icons">arrow_forward</i>',
                multipleDatesSeparator: ' - ',
                dateFormat: 'dd M'
            });
            start.parent().addClass('dropdown-calendar__item--single-item')

            // function changeHeight(a) {
            //     let elem = $(a);
            //     let elemWidth = elem.width();
            //     elem.css({
            //         'height': elemWidth + 'px'
            //     });
            //     console.log(elem.height())
            // }

            // active inline-calendar
            start.click(function () {

                let inlineCalendar = elem.find(model.inline_calendar);

                if (inlineCalendar.hasClass('active')) {
                    inlineCalendar.removeClass('active')
                } else {
                    inlineCalendar.addClass('active')
                    //changeHeight('.datepicker--cell')
                }
            })
        }
    })


    // Cоздание и добавление кнопки "применить"
    let datepickersContainer = $('.datepicker');
    datepickersContainer.each(function () {
        let elem = $(this);
        let buttonBlock = elem.find('.datepicker--buttons');
        let submitButton = $('<span class="datepicker--btn button-link" data-action="submit">Применить</span>');
        buttonBlock.append(submitButton);
        let inlineCalendar = wrap.find(model.inline_calendar);


        let dataPickerButton = elem.find('.datepicker--button');
        dataPickerButton.addClass('button-link');

        let btnSend = buttonBlock.find('.datepicker--btn[data-action="submit"]');
        btnSend.click(function () {
            $(model.startElem).each(function () {
                $(this).data('datepicker').hide();
                inlineCalendar.removeClass('active')
            })
        })

        let clearBtn = elem.find('span[data-action="clear"]');
        clearBtn.click(function () {
            $(model.startElem).each(function () {
                $(this).data('datepicker').hide();
                inlineCalendar.removeClass('active')
            })
        })
    })
})