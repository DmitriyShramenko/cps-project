import '../scss/style.scss'
import './buttons.js'

let swiperInstance;

function initSwiper() {
    if (window.innerWidth < 768) {
        let swiper = new Swiper('.swiper', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                320: {
                    enabled: true,
                },
                768: {
                    enabled: false,
                }
            },
            spaceBetween: 16
        });
    } else {
        const swiperContainers = document.querySelectorAll('.swiper');
        swiperContainers.forEach(swiperContainer => {
            swiperContainer.remove();
        });
    }
}

window.addEventListener('resize', initSwiper);
window.addEventListener('load', initSwiper);