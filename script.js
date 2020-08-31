$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('menu-active')
    })
    
    $('.menu__close').click(function(event) {
        $('.header__burger, .header__menu').removeClass('menu-active')
    })

    
    function randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
      }
      
      
    $('.content__button').click(function(event) {
        $ (alert( randomInteger(1, 3) ));
    })
})
