$(document).ready(function() {
    // RNG 1
    // 1-43 Common 1-43
    // 44-69 Uncommon 1-26
    // 70-85 Rare 1-16
    // 86-94 Epic 1-9
    // 95-99 Legendary 1-5
    // 100 Mythic 1-1

    // RNG 2
    // Common 1-11
    // Uncommon 1-8
    // Rare 1-16
    // Epic 1-10
    // Legendary 1-8
    // Mythic 1-2

    // chance = (random.randint(1,10000))
    // if chance <= 7992:
    //     debugger("Blue")
    //     nBlue += 1
    // elif chance > 7992 and chance <= (1598 + 7992):
    //     debugger("Purple")
    //     nPurple += 1
    // elif chance > 9590 and chance <= (9590 + 320):
    //     debugger("Pink")
    //     nPink += 1
    // elif chance > 9910 and chance <= (9910 + 64):
    //     debugger("Red")
    //     nRed += 1
    // elif chance > 9974:
    //     debugger("Gold")
    //     nGold += 1

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
        var Common = 11;
        var Uncommon = 8;
        var Rare = 16;
        var Epic = 10;
        var Legendary = 8;
        var Mythic = 2;
        
        if (rarity == 'Common'){
            return [(Math.floor(Math.random() * Common) + 1), '#fff'];

        }
        else if (rarity == 'Uncommon'){
            return [(Math.floor(Math.random() * Uncommon) + 1), '#00a023'];
        }
        else if (rarity == 'Rare'){
            return [(Math.floor(Math.random() * Rare) + 1), '#0046dd'];
        }
        else if (rarity == 'Epic'){
            return [(Math.floor(Math.random() * Epic) + 1), '#4a228a'];
        }
        else if (rarity == 'Legendary'){
            return [(Math.floor(Math.random() * Legendary) + 1), '#e5ff00'];
        }
        else if (rarity == 'Mythic'){
            return [(Math.floor(Math.random() * Mythic) + 1), '#ff00ff'];
        }
    }

    var rarity = main();
    var funreturn = number(rarity);
    var numberv = funreturn[0]
    var color1 = funreturn[1]
    var a = rarity + '‎' + numberv

    var rarity = main();
    var funreturn = number(rarity);
    var numberv = funreturn[0]
    var color2 = funreturn[1]
    var b = rarity + '‎' + numberv;

    document.getElementById('a').innerHTML = a;
    document.getElementById('b').innerHTML = b;

    $('#a').parent().children().css('color', color1);
    $('#b').parent().children().css('color', color2);

    $(".card").click( function() {
        $(this).toggleClass('flip');
    });
});