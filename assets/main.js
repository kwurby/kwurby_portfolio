function cat(el, type) {
    var text = $(el).html();
    var color = $(el).attr(`cat-color`);
    text = text.replace('{', `<${type}>`);
    text = text.replace('}', `</${type}>`);
    text = text.replaceAll('|', `<pre></pre>`);
    text = text.replaceAll('[', `<${type} style="color: ${color}">`);
    text = text.replaceAll(']', `</${type}>`);
    $(el).html(text);
}

$(document).ready(function() {
    cat('#mainTitle', 'a');
    //idk why this works lmao
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


});
