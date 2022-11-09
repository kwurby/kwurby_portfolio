let developer = true;

function dev(input){
    if (developer != true) return false;
    console.log(input);
    return true;
}

window.onload = function(){
    var style = getComputedStyle(document.body);
    dev(style.getPropertyValue('--secondary'));

    var el = document.querySelectorAll(".link");
    for (var i = 0 ; i < el.length; i++) {
        const annotation = RoughNotation.annotate(el[i], { type: 'underline', color: style.getPropertyValue('--secondary'), padding: 0});
        annotation.show();
    }

    el = document.querySelectorAll(".highlight");
    for (var i = 0 ; i < el.length; i++) {
        const annotation = RoughNotation.annotate(el[i], { type: 'highlight', color: 'yellow', iterations: 1, multiline: true});
        annotation.show();
    }

    el = document.querySelectorAll(".bracket");
    for (var i = 0 ; i < el.length; i++) {
        const annotation = RoughNotation.annotate(el[i], { type: 'bracket', color: 'red', padding: [2, 4], brackets: ['left', 'right']});
        annotation.show();
    }


}