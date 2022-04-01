const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const ProjNum = 2;
const Time = 500;
const Time2 = Time / ProjNum+1;

$(document).ready(function(){

    // load animation 
    $('header').animate({opacity: '1'}, 1000);
    $('#bruh').delay(500).animate({opacity: '1'}, 150);
    $('#par').delay(800).animate({opacity: '1'}, 150);
    $('#term').delay(1000).animate({opacity: '1'}, 150);
    
    sleep(1500).then(() => {
        // work from here: https://codepen.io/duvander (thanks! :D)
        function increase(i, ProjNum) {
            if (i <= ProjNum) {
              document.getElementById('bruh').innerHTML = i;
              setTimeout(function() {
                increase(i + 1, ProjNum);
              }, Time2);
            }
        }
        increase(0, ProjNum);
    });






    //User interaction
    $("#info").hover(function(){
        $(".a1").stop().animate({'padding-right': '10px'}, 150);
        $(".a2").stop().animate({'padding-left': '10px'}, 150);
        console.log("hover");
    }, function(){
        $(".a1").stop().animate({'padding-right': '4px'}, 150);
        $(".a2").stop().animate({'padding-left': '4px'}, 150);
        console.log("unhover");
    });
    $("#info").click(function(){
        $('#top').append('<div class="console-line"><b>Projects =></b></div>');
        $('#top').append('<div class="console-line">There are currently '+ProjNum+' projects in development, for further info checkout my github!!! <a href="https://github.com/VIOLETUMM">https://github.com/VIOLETUMM</a></div>');
        $('#top').append('<div class="console-line">    1. catz [ unreleased :D ]</div>');
        $('#top').append('<div class="console-line">    2. hilt [ under development (⌣̩̩́_⌣̩̩̀) ]</div>');
        $('#top').append('<div class="console-line">::</div>');
        $('#top').append('<div class="console-line"><b>About =></b></div>');
        $('#top').append('<div class="console-line">Name: Alex</div>');
        $('#top').append('<div class="console-line">Age: 16</div>');
    });

    function terminalLoop(){
        console.log('Enter');
        var input = xssFilters.inHTMLData($('#consoleEM').val());
        $('#top').append('<div class="console-line"><b style="color: blue;">user></b>'+ input +'</div>');
        if (input == "help") {
            $('#top').append('<div class="console-line"><b>projects:</b> pro -l</div>');
            $('#top').append('<div class="console-line"><b>about me:</b> user -info</div>');
            $('#top').append('<div class="console-line"><b>clear terminal:</b> cls</div>');
        } else if (input == "pro -l") {
            $('#top').append('<div class="console-line">There are currently '+ProjNum+' projects in development, for further info checkout my github!!! <a href="https://github.com/VIOLETUMM">https://github.com/VIOLETUMM</a></div>');
            $('#top').append('<div class="console-line">    1. catz [ unreleased :D ]</div>');
            $('#top').append('<div class="console-line">    2. hilt [ under development (⌣̩̩́_⌣̩̩̀) ]</div>');
        } else if (input == "user -info") {
            $('#top').append('<div class="console-line"><b>Name:</b> Alex</div>');
            $('#top').append('<div class="console-line"><b>Age:</b> 16</div>');
        } else if (input == "cls") {
            $('#top').empty();
        } else if(input == "") {
            return
        } else {
            $('#top').append("<div class='console-line'><b style='color: red;'>Error:</b> '"+ input +"'  is not recognized as an internal or external command, operable program or batch file.</div>");
        }
        $('#consoleEM').val("");
    }

    $('#consoleEM').on("keyup", function(e) {
        if (e.keyCode == 13) {
            terminalLoop();
        }
    });
    $('#enter').click(function(){
        terminalLoop();
    });

    
});