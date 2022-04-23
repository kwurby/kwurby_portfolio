const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


$(document).ready(function(){
        sleep(1000).then(() => {
            console.log('1sec');
            // filter = xssFilters.inHTMLData(value)
        });
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
});