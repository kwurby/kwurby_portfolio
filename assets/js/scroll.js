const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

el = document.getElementsByClassName("ghover");
for (var i = 0 ; i < el.length; i++) {
    el[i].addEventListener("click", function(el){ 
        var target = this.getAttribute("id")
        var scrollTo = document.querySelector(`.${target}`);
        scroller.scrollTo(scrollTo);
    });
}