let toggle = document.querySelector("#header .toggle-boton");
let collapse = document.querySelectorAll("#header .alternar");

toggle.addEventListener('click' ,function(){
    collapse.forEach(col => col.classList.toggle("alternar-toggle"));
})

//con masonry//
new Masonry("#posts .grilla", {
    itemSelector : '.grilla-item',
    gutter : 20
});

//swiper libreria inicializador//
new Swiper('.swiper-container', {
    direction : 'horizontal',
    loop : true,
    slidesPerView : 5,
    autoplay : {
        delay : 3000
    },
    // responsive brakpoints
    breakpoints : {
        '@0' : {
            slidesPerView : 2
        },
        // 888px
        '@1.00' : {
            slidesPerView : 3
        },
        // 1110px
        '@1.25' : {
            slidesPerView : 4
        },
        // 1330px
        '@1.50' : {
            slidesPerView: 5
        }
    }
})