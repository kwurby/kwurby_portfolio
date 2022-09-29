$(document).ready(function() {
    //NOTE: This is the code that is used to get the data from the url.
    var Url = window.location.href; 
    var urlData = Url.indexOf("?") + 1;
    if (urlData != 0) {
        console.log(atob(Url.substring(urlData)));
        urlString = atob(Url.substring(urlData));

        var DataIn = urlString.split(',');



        var Common = DataIn[0];
        var Uncommon = DataIn[1];
        var Rare = DataIn[2];
        var Epic = DataIn[3];
        var Legendary = DataIn[4];
        var Mythic = DataIn[5];
    } else {
        var Common = 1;
        var Uncommon = 1;
        var Rare = 1;
        var Epic = 1;
        var Legendary = 1;
        var Mythic = 1;
    }

    document.getElementById('Common').value = Common;
    document.getElementById('Uncommon').value = Uncommon;
    document.getElementById('Rare').value = Rare;
    document.getElementById('Epic').value = Epic;
    document.getElementById('Legendary').value = Legendary;
    document.getElementById('Mythic').value = Mythic;

    function main() {
        chance = Math.floor(Math.random() * 5000) + 1
        if (chance <= 15) {
            return 'Mythic';
        } else if (chance <= 65) {
            return 'Legendary';
        } else if (chance <= 232) {
            return 'Epic';
        } else if (chance <= 733) {
            return 'Rare';
        } else if (chance <= 2400) {
            return 'Uncommon';
        } else {
            return 'Common';
        } 
    };

    function number(rarity){
        var Common = document.getElementById('Common').value;
        var Uncommon = document.getElementById('Uncommon').value;
        var Rare = document.getElementById('Rare').value;
        var Epic = document.getElementById('Epic').value;
        var Legendary = document.getElementById('Legendary').value;
        var Mythic = document.getElementById('Mythic').value;
        //NOTE: =========================================================================================
        if (rarity == 'Common'){
            return [(Math.floor(Math.random() * Common) + 1), '#727272'];
        }

        //NOTE: =========================================================================================
        else if (rarity == 'Uncommon'){
            return [(Math.floor(Math.random() * Uncommon) + 1), '#00a703'];
        }

        //NOTE: =========================================================================================
        else if (rarity == 'Rare'){
            return [(Math.floor(Math.random() * Rare) + 1), '#35abd6'];
        }

        //NOTE: =========================================================================================
        else if (rarity == 'Epic'){
            return [(Math.floor(Math.random() * Epic) + 1), '#a42cc7'];
        }

        //NOTE: =========================================================================================
        else if (rarity == 'Legendary'){
            return [(Math.floor(Math.random() * Legendary) + 1), '#ddc11f'];
        }

        //NOTE: =========================================================================================
        else if (rarity == 'Mythic'){
            return [(Math.floor(Math.random() * Mythic) + 1), '#ff0000'];
        }
    }

    $(".card").click( function() {
        $(this).toggleClass('flip');
    });

    function cardLoad(){
        //NOTE: card 1
        var saveChance = 1000;

        star = Math.floor(Math.random() * saveChance) + 1
        var cont = '';
        if (star == 1){
            cont = `
            <div id="star">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
            </div>
            `;
        }

        var rarity = main();
        if (rarity == 'Mythic'){
            $("#a").addClass('Mythic')
        };

        var funreturn = number(rarity);
        var numberv = funreturn[0];
        var color1 = funreturn[1];
        cont = cont + numberv;
        console.log(cont);
        $('#a').html(cont);
        $('#a').css({
            'color': color1,
            'background-image': `linear-gradient(#291624 50%, ${color1}5d)`
        });
        $('#a #star svg').css({
            'fill': color1
        });

        //NOTE: card 2

        star = Math.floor(Math.random() * saveChance) + 1
        var cont = '';
        if (star == 1){
            cont = `
            <div id="star">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
            </div>
            `;
        }

        var rarity = main();
        if (rarity == 'Mythic'){
            $("#b").addClass('Mythic')
        };
        var funreturn = number(rarity);
        var numberv = funreturn[0];
        var color2 = funreturn[1];
        cont = cont + numberv;
        console.log(cont);
        $('#b').html(cont);
        $('#b').css({
            'color': color2,
            'background-image': `linear-gradient(#291624 50%, ${color2}5d)`
        });
        $('#b #star svg').css({
            'fill': color2
        });
    }

    cardLoad();

    $(".cardReset").click( function() {
        $("#a").removeClass('Mythic');
        $("#b").removeClass('Mythic');

        $(".left a").addClass('disabled');
        $(".card").addClass('disabled');
        setTimeout(function(){ 
            cardLoad();
            $(".left a").removeClass('disabled');
            $(".card").removeClass('disabled');
        }, 1000);
        $(".card").removeClass('flip');
    });

    $("#setBut").click( function() {
        $("#settings").toggleClass('menu');
        $("#settings").toggleClass('menuNone');
    });
});