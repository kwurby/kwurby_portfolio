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

//1
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
        arrowAni.pause();
    });
}
//2
function textboxPop(){
    $('#iconInfo').css('display', 'block');
    anime({
        targets: '#iconInfo',
        scale: '1',
        duration: 800
    });
}
//3
function textboxPopInfo(ID){
    var half= {
        halfof: 0,
    }
    $('#iconInfo').css('transform', 'scale(1)');
    anime({
        targets: ['#iconInfo', half],
        halfof: 10,
        translateY: -20,
        duration: 150,
        direction: 'alternate',
        easing: 'cubicBezier(.5, .05, .1, .3)',
        update: function() {
            if (half.halfof != 10) return;
            changetxt(ID);
            Dev('textboxPopInfo');
        }
    }).finished.then(function(){
        $('#iconInfo').css('transform', 'translateY(0)');
    });
}
//4
function changetxt(ID) {
    var title, text;
    switch( ID ) {
        case 'vue':
            title = 'Vue.js';
            text = 'I think I have some basic vue3 knowledge and can use it without punching my screen from the errors.';
            break
        case 'css':
            title = 'Css';
            text = 'Messy but yes, I can use it I definatly prefer lessjs for css.';
            break
        case 'html':
            title = 'Html';
            text = 'pretty much 100% here, I can use it without any problems.';
            break
        case 'js':
            title = 'Javascript';
            text = '80% Done by me and 20% from Stack Over Flow :) Hehe! However, I do read the docs first and can figure most things out on my own.';
            break
        case 'electron':
            title = 'Electron';
            text = 'WOO! love this framework, I can use icpMain and only cry a little about it not working right.';
    }
    $('#iconInfo').html(`<h1>${title}</h1><p>${text}</p>`);
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
            if(coolDown == null || coolDown == 0 && $(this).attr('class') != 'skill active') {
                //vars
                var thisId = $(this).attr("id");
                var elloc = $('.iContainer').position();
                
                //checks
                if(coolDown == null) stopArrow();
                if(coolDown == null) changetxt(thisId);
                if(lastId == null) var testbox = false;
                if(lastId != null) var testbox = true;

                //resets
                $(this).toggleClass('active');
                coolDown = 1;
                $(this).addClass('pending');
                resetpos(lastId);
                $(this).removeClass('pending');

                anime({
                    targets: this,
                    top: `${elloc.top - 270}px`,
                    left: '30%',
                    fill: 'rgba(255, 255, 255, 1)',
                    easing: 'easeOutElastic(1, .6)'
                });

                //text animation
                if(testbox) textboxPopInfo(thisId);

                //track
                lastId = thisId;
                coolDown = 0;

            }
        });
        //Nav==========================================================
        $('.menuD').hover(function(){
            anime({
                targets: this,
                scale: '1.1',
                rotate: '0deg',
                easing: 'easeOutElastic(1, .6)'
            });
        
        } , function(){
            anime({
                targets: this,
                scale: '1',
                rotate: '-90deg',
                easing: 'easeOutElastic(1, .6)'
            });
        });
        //Project==========================================================

        $('.proj').hover(function(){
            anime({
                targets: this,
                scale: '1.1',
                easing: 'easeOutElastic(1, .6)'
            });
        
        } , function(){
            anime({
                targets: this,
                scale: '1',
                easing: 'easeOutElastic(1, .6)'
            });
        });
        //github==========================================================
        $('.link').hover(function(){
            anime({
                targets: this,
                scale: '1.1',
                background: 'rgba(253, 253, 150, 1)',
                color: 'rgba(32, 18, 30, 1)',
                easing: 'easeOutElastic(1, .6)'
            });
        
        } , function(){
            anime({
                targets: this,
                scale: '1',
                background: 'rgba(253, 253, 150, 0)',
                color: 'rgba(253, 253, 150, 1)',
                easing: 'easeOutElastic(1, .6)'
            });
        });

        $('.duck a').hover(function(){
            anime({
                targets: this,
                scale: '1.1',
                background: 'rgba(253, 253, 150, 1)',
                color: 'rgba(32, 18, 30, 1)',
                easing: 'easeOutElastic(1, .6)'
            });
        
        } , function(){
            anime({
                targets: this,
                scale: '1',
                background: 'rgba(253, 253, 150, 0)',
                color: 'rgba(253, 253, 150, 1)',
                easing: 'easeOutElastic(1, .6)'
            });
        });

        $('.contcon a').hover(function(){
            anime({
                targets: this,
                scale: '1.1',
                backgroundImage: 'linear-gradient(to bottom right, rgba(255, 69, 171, 1) 50%, rgba(253, 253, 150, 1))'
            });
        
        } , function(){
            anime({
                targets: this,
                scale: '1',
                backgroundImage: 'linear-gradient(to bottom right, rgba(255, 69, 171, 1) 20%, rgba(253, 253, 150, 1))'
            });
        });
});

//http request===============================================================
//https://api.github.com/users/VIOLETUMM
function Github(json){
    var avatar = json.avatar_url;
    var bio = json.bio;
    var followers = json.followers;
    var link = json.html_url;
    var name = json.name;
    var repos = json.public_repos;

    $('.pfp').attr('src', avatar);
    $('.Gitpfp').attr('src', avatar);
    $('.gitCont h1').html(name);

    $('.gitCont .followers').html('followers: ' + followers);
    $('.gitCont .repo').html('repos: ' + repos);
    $('.gitCont .bio').html(bio);
    $('.gitCont .link').attr('href', link);
}

fetch("https://api.github.com/users/VIOLETUMM")
    .then(response => {
        if (!response.ok) Dev(reponse.status);
        return response.json();
}).then(MyInfo => {
    Dev(MyInfo);
    Github(MyInfo);
}).catch(error => console.log(error));

//TODO: 3. figure out a way to make the waves responsive in some way to the user
//TODO: 5. make title letters resposive