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

    function main() {
        if ((Math.floor(Math.random() * 100) + 1) <= 1) {
            return 'Mythic';
        } else if ((Math.floor(Math.random() * 100) + 1) <= 9) {
            return 'Legendary';
        } else if ((Math.floor(Math.random() * 100) + 1) <= 16) {
            return 'Epic';
        } else if ((Math.floor(Math.random() * 100) + 1) <= 26) {
            return 'Rare';
        } else if ((Math.floor(Math.random() * 100) + 1) <= 46) {
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
            return Math.floor(Math.random() * Common) + 1
        }
        else if (rarity == 'Uncommon'){
            return Math.floor(Math.random() * Uncommon) + 1
        }
        else if (rarity == 'Rare'){
            return Math.floor(Math.random() * Rare) + 1
        }
        else if (rarity == 'Epic'){
            return Math.floor(Math.random() * Epic) + 1
        }
        else if (rarity == 'Legendary'){
            return Math.floor(Math.random() * Legendary) + 1
        }
        else if (rarity == 'Mythic'){
            return Math.floor(Math.random() * Mythic) + 1
        }
    }

    var rarity = main();
    var numberv = number(rarity);
    var a = rarity + '-' + numberv

    var rarity = main();
    var numberv = number(rarity);
    var b = rarity + '-' + numberv;

    document.getElementById('output').innerHTML = `
        <p>${a}</p>
        <p>${b}</p>
    `;


});