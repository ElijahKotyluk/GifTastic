let charArray = ['Cloud Strife', 'Vincent Valentine', 'Squall Lionheart', 'Tifa Lockheart', 'Adelbert Steiner', 'Freya Crescent'];

function makeButtons () {
    $('#buttons').empty();

    for (let i = 0; i < charArray.length; i++) {
        let $btn = $('<button>');
        $btn.addClass('show');
        $btn.attr('data-name', charArray[i]);
        $btn.text(charArray[i]);
        $('buttons').append($btn);
    }
}