function urlUpdate() {
    var Common = document.getElementById('Common').value;
    var Uncommon = document.getElementById('Uncommon').value;
    var Rare = document.getElementById('Rare').value;
    var Epic = document.getElementById('Epic').value;
    var Legendary = document.getElementById('Legendary').value;
    var Mythic = document.getElementById('Mythic').value;
    
    var Data = [Common, Uncommon, Rare, Epic, Legendary, Mythic];

    window.location = '?' + btoa(Data);
    console.log("test");
}