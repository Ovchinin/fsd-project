import 'paginationjs';

$('.pagination').pagination({
    dataSource: function (done) {
        var result = [];
        for (var i = 1; i <= 170; i++) {
            result.push(i);
        }
        done(result);
    },
    pageSize: 12,
    autoHidePrevious: true,
    autoHideNext: true,
    pageRange: 1,
    prevText: 'arrow_back',
    nextText: 'arrow_forward',
    callback: function (data, dataSource) {
        for (let index = 0; index < data.length; index++) {
            let from = data[0];
            let to = data[data.length - 1];
            let total = dataSource.totalNumber;
            let content = document.querySelector('.pagination__info');
            if (total > 100) {
                content.innerHTML = from + ' – ' + to + ' из 100+ вариантов аренды</div>'
            } else {
                content.innerHTML = from + ' – ' + to + ' из ' + total + ' вариантов аренды</div>'
            }
        }
    },
});