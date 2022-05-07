//const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const dev__ = true;

function Dev(text){
    if(dev__){console.log(text)};
    return
}

// separate title per char ================================================================
function titleR(){
    const title = $('.title').html();
    var titleString = '';
    title.split('').forEach(function(letter, i){
        if (letter == ' ') {
            titleString = titleString + '<span style="width: 2vw" class="letter">' + letter + '</span>';
        } else {titleString = titleString + '<span class="letter">' + letter + '</span>'};
        Dev(titleString);
    });
    $('.title').html(titleString);
}
// reset selected element ================================================================
function resetpos(reset){
    $(`#${reset}`).toggleClass('active');
    var left, top;
    if (reset != null){
        switch( reset ) {
            case 'vue':
                left = '10%';
                top = '60px';
                break
            case 'css':
                left = '30%';
                top = '10px';
                break
            case 'html':
                left = '50%';
                top = '80px';
                break
            case 'js':
                left = '70%';
                top = '150px';
                break
            case 'electron':
                left = '85%';
                top = '10px';
        }
        anime({
            targets: `#${reset}`,
            fill: 'rgba(255, 255, 255, 0.651)',
            scale: '1',
            left: left,
            top: top,
            easing: 'easeOutElastic(1, .6)'
        });
    }
}
// functions ================================================================
function stopArrow(){
    anime({
        targets: '.arrow',
        scale: '0',
        duration: 800,
        easing: 'easeInElastic(1, .6)'
    }).finished.then(function(){
        $('.arrow').css('display', 'none');
        letContent = true;
        textboxPop()
    });
}

function textboxPop(){
    $('#iconInfo').css('display', 'block');
    anime({
        targets: '#iconInfo',
        scale: '1',
        duration: 800
    })
}

// animations ================================================================
const arrowAni = anime({
    targets: '.arrow',
    translateY: 40,
    loop: true,
    direction: 'alternate',
    easing: 'easeInElastic(1, .6)'
});
//===============================================================
$(document).ready(function(){
        var lastId, coolDown = null;
        var letContent = false;

        titleR();

        //NOTE: filter = xssFilters.inHTMLData(value)

        $('.section').click(function(){
            anime({
                targets: this,
                translateY: -25,
                direction: 'alternate',
                duration: 100,
                easing: 'easeInOutElastic(1, .6)'
            }).finished.then(function(){
                $('.section').css('transform', 'translateY(0)');
            });
        });

        //plays arrow animation
        arrowAni.play();

        $('.skill').hover(function(){
            Dev($(this).attr('class'));
            if(coolDown == null || coolDown == 0 && $(this).attr('class') != 'skill active'){
                anime({
                    targets: this,
                    scale: '1.2',
                    fill: 'rgba(255, 255, 255, 1)',
                    easing: 'easeOutElastic(1, .6)'
                });
            }
        } , function(){
            if(coolDown == null || coolDown == 0 && $(this).attr('class') != 'skill active'){
                anime({
                    targets: this,
                    scale: '1',
                    fill: 'rgba(255, 255, 255, 0.651)',
                    easing: 'easeOutElastic(1, .6)'
                });
            }
        });

        $('.skill').click(function(){
            if(coolDown == null || coolDown == 0 && $(this).attr('class') != 'skill active'){
                if(coolDown == null){
                    stopArrow();
                }


                $(this).toggleClass('active');
                coolDown = 1;
                var thisId = $(this).attr("id")
                $(this).addClass('pending');
                resetpos(lastId);
                $(this).removeClass('pending');

                var thisId = $(this).attr("id");

                var elloc = $('.iContainer').position();
                anime({
                    targets: this,
                    top: `${elloc.top - 270}px`,
                    left: '30%',
                    fill: 'rgba(255, 255, 255, 1)',
                    easing: 'easeOutElastic(1, .6)'
                });

                lastId = thisId;
                coolDown = 0;
            }
        });
});

//TODO: 1. convert to vue project
//TODO: 2. make the text spill out of the icon
//TODO: 3. figure out a way to make the waves responsive in some way to the user
//TODO: 4. make the nav not look totally terrible LMAO.
//TODO: 5. make title letters resposive