$(document).ready(function() {
    //NOTE: This is the code that is used to get the data from the url.
    var Url = window.location.href; 
    var urlData = Url.indexOf("?") + 1;
    console.log(atob(Url.substring(urlData)));
    urlString = atob(Url.substring(urlData));

    var DataIn = urlString.split(',');


    var Common = DataIn[0];
    var Uncommon = DataIn[1];
    var Rare = DataIn[2];
    var Epic = DataIn[3];
    var Legendary = DataIn[4];
    var Mythic = DataIn[5];

    document.getElementById('Common').value = Common;
    document.getElementById('Uncommon').value = Uncommon;
    document.getElementById('Rare').value = Rare;
    document.getElementById('Epic').value = Epic;
    document.getElementById('Legendary').value = Legendary;
    document.getElementById('Mythic').value = Mythic;

    function main() {
        chance = Math.floor(Math.random() * 130) + 1
        if (chance <= 1) {
            return 'Mythic';
        } else if (chance <= 6) {
            return 'Legendary';
        } else if (chance <= 15) {
            return 'Epic';
        } else if (chance <= 31) {
            return 'Rare';
        } else if (chance <= 57) {
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
            return [(Math.floor(Math.random() * Mythic) + 1), '#e5ff00'];
        }
    }

    function fakeout(rarity){
        if (rarity == 'Common'){
            rollC = (Math.floor(Math.random() * 2) + 1)
            if(rollC == 1){
                return "Legendary"
            } else {
                return "Mythic"
            }
        } else if (rarity == 'Epic'){
            rollE = (Math.floor(Math.random() * 2) + 1)
            if(rollE == 1){
                return "Common"
            } else{
                return "Uncommon"
            }
        } else if (rarity == 'Legendary'){
            rollR = (Math.floor(Math.random() * 2) + 1)
            if(rollR == 1){
                return "Common"
            } else{
                return "Uncommon"
            }
        } else if (rarity == 'Mythic'){
            rollR2 = (Math.floor(Math.random() * 2) + 1)
            if(rollR2 == 1){
                return "Common"
            } else{
                return "Uncommon"
            }
        } else {
            return "Common"
        }
    }

    $(".card").click( function() {
        $(this).toggleClass('flip');
    });

    function cardLoad(){
        //NOTE: card 1
        var rarity = main();
        if (rarity == 'Mythic'){
            $("#a").addClass('Mythic')
        };

        var funreturn = number(rarity);
        var numberv = funreturn[0]
        var color1 = funreturn[1]
        var a = rarity + '-' + numberv;
        $('#a').html(a);
        $('#a').css('color', color1);

        //NOTE: card 2
        var rarity = main();
        if (rarity == 'Mythic'){
            $("#b").addClass('Mythic')
        };
        var funreturn = number(rarity);
        var numberv = funreturn[0]
        var color2 = funreturn[1]
        var b = rarity + '-' + numberv;
        $('#b').html(b);
        $('#b').css('color', color2);
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
});