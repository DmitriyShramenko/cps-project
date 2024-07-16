import '../scss/style.scss'
import './buttons.js'

console.log('Works!')

let swiperInstance;

function initSwiper() {
  if (window.innerWidth < 768) {
      if (!swiperInstance) {
          swiperInstance = new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
          },
        });
      }
    } else {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
      }
        const swiperContainers = document.querySelectorAll('.swiper');
        swiperContainers.forEach(swiperContainer => {
            const swiperWrapper = swiperContainer.querySelector('.swiper-wrapper');
            if (swiperWrapper) {
                while (swiperWrapper.firstChild) {
                    swiperWrapper.removeChild(swiperWrapper.firstChild);
          }
        }
				swiperContainer.remove();

      });
    }
}

window.addEventListener('resize', initSwiper);
window.addEventListener('load', initSwiper);
