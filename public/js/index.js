/*
 *  Mobile menu toggle
 */
jQuery( document ).ready(function($) {

    var menuAnimating = false;
    var menuOpened = false;

    var $header = jQuery('.header');
    var $veil = jQuery(".nav-mobile__veil");
    var $trigger = jQuery('.nav-mobile__trigger');

    jQuery($trigger).on('click', function (ev) {
        ev.stopImmediatePropagation();

        if(!menuAnimating) {
            menuAnimating = true;

            if(menuOpened) {
                $veil.removeClass('active');
                menuOpened = false;
            } else {
                $veil.addClass('active');
                menuOpened = true;
            }

            menuAnimating = false;
        }
    });

    jQuery(document).click(function(ev){
        if(menuOpened && ev.target !== $header[0] && !$.contains($header[0], ev.target)) {
            $veil.removeClass('active');
            menuOpened = false;
        }
    });
});

/*
 *  Hero screens animations
 */
(function(){

    var $frontScreen = jQuery('.hero__footer__screen--front'),
        $frontScreenTag = $frontScreen.find('.tag'),
        $middleScreen = jQuery('.hero__footer__screen--middle'),
        $backScreen = jQuery('.hero__footer__screen--back'),
        $backScreenTag = $backScreen.find('.tag');

    var animScreensTL = new TimelineMax();

    animScreensTL.clear();

    animScreensTL.set($frontScreen, {
        opacity: 0,
        x: 40
    })
    .set($frontScreenTag, {
        opacity: 0,
        y: 10
    })
    .set($middleScreen, {
        opacity: 0,
        x: 40
    })
    .set($backScreen, {
        opacity: 0,
        x: 40
    })
    .set($backScreenTag, {
        opacity: 0,
        y: 10
    })
    .to($frontScreen, .8, {
        x: 0,
        ease: Power2.easeInOut
    }, '+=0.1')
    .to($frontScreen, .5, {
        opacity: 1,
        ease: Power2.easeInOut
    }, '-=0.6')
    .to($frontScreenTag, .6, {
        opacity: 1,
        y: 0,
        ease: Power2.easeInOut,
        onComplete: function(){
            $frontScreenTag.addClass('js-hovering');
        }
    }, '-=0.3')
    .to($middleScreen, .8, {
        x: 0,
        ease: Power2.easeInOut
    }, '-=0.8')
    .to($middleScreen, .5, {
        opacity: 1,
        ease: Power2.easeInOut
    }, '-=0.7')
    .to($backScreen, .8, {
        x: 0,
        ease: Power2.easeInOut
    }, '-=0.7')
    .to($backScreen, .5, {
        opacity: 1,
        ease: Power2.easeInOut
    }, '-=0.6')
    .to($backScreenTag, .6, {
        opacity: 1,
        y: 0,
        ease: Power2.easeInOut,
        onComplete: function(){
            $backScreenTag.addClass('js-hovering');
        }
    }, '-=0.3');

})();