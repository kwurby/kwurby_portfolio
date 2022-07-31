$(document).ready(function() {
    let first_tab = $('.window-top .tab:nth-child(1)')
    let second_tab = $('.window-top .tabTxt:nth-child(2)')
    first_tab.addClass('active');

    let winContent = second_tab.html()
    $('.window').html(winContent)


    $('.tab').click(function() { 
        $('.tab').removeClass('active');

        $(this).addClass('active');

        var tab = '.' + $(this).attr('id') + 'Txt';
        console.log(tab);
        var winCont = $(tab).html()

        $('.window').html(winCont)
    });

    $('.navObj a').click(function() {
        console.log(this);
    });

    $('.cog').hover(function() {
        anime({
            targets: '.cog a',
            translateY: '-100%'
        })
    }, function() {
        anime({
            targets: '.cog a',
            translateY: 0
        })
    });
});