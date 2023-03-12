$(document).ready(function() {
    var links = [
		{
            name: 'Infinity Engine - QoS',
            link: 'index'
        },
		{
            name: 'Infinity Engine - IW7',
            link: 'index'
        },
    ];

    for(var i in links) {
        var link = links[i];

        $('#marquee').append('<a href="' + link.link + '" target="_blank">' + link.name + '</a>');

        var link = $('#marquee').children('a').last();

        if(i != links.length - 1) {
            $('#marquee').append(' · ');
        }
    }

    $('#marquee').marquee({
        duration: 20000,
        gap: 400,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    });
});
