//change nav style on scroll

window.addEventListener('scroll',()=>
    {
        document.querySelector('nav')
            .classList.toggle('window-scrolled', window.scrollY>0)
    }

)

//SwiperJS

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        599:{
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1023:{
            slidesPerView: 3,
            spaceBetween: 60,
        }
    }
});