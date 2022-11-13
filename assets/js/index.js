let developer = true;

function dev(input){
    if (developer != true) return false;
    console.log(input);
    return true;
}
class RoughNotationStyling {
    constructor(el, annotate) {
        this.el = el
        this.annotate = annotate
        this.one = 0;
    }
    Displaylistener(){
        //Displays if already on screen
        if (this.el.getBoundingClientRect().bottom <= window.innerHeight && !this.one) {
            this.one = 1;

            //!can't declare in constructor because you will miss the animation.
            this.annotation = RoughNotation.annotate(this.el, this.annotate);
            this.annotation.show();
        }
        //waits till on screen
        document.addEventListener("scroll", () => {
            if (this.el.getBoundingClientRect().bottom <= window.innerHeight && !this.one) {
                this.one = 1;
                this.annotation = RoughNotation.annotate(this.el, this.annotate);
                this.annotation.show();
            }
        });
    }
}

window.onload = function(){
    var style = getComputedStyle(document.body);

    //selectors for the animations
    selectors = [
        ".link",
        ".highlight",
        ".bracket"
    ]

    //reads threw the selectors
    for (var i = 0; i < selectors.length; i++) {
        current = selectors[i];
        var el = document.querySelectorAll(selectors[i]);

        //reads threw elements of selector type
        for (var u = 0 ; u < el.length; u++) {
            //new RoughNotationStyling( element, animation settings ).Displaylistener();
            if (current == ".link") new RoughNotationStyling(el[u], { type: 'underline', color: style.getPropertyValue('--secondary'), padding: 0}).Displaylistener();
            if (current == ".highlight") new RoughNotationStyling(el[u], { type: 'highlight', color: 'yellow',  iterations: 1, multiline: true}).Displaylistener();
            if (current == ".bracket") new RoughNotationStyling(el[u], { type: 'bracket', color: 'red', padding: [2, 4], brackets: ['left', 'right']}).Displaylistener();
        }
    }
}