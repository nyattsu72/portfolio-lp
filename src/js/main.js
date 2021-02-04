/*Roading Animatiom*/
window.addEventListener("load", function () {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');

  const activetAnime = document.getElementById('targetAnime');
  console.log(activetAnime);
  activetAnime.classList.add("textAnime");
});



/*window サイズ取得*/

const setFillHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

// 画面のサイズ変動があった時に高さを再計算する
window.addEventListener("resize", setFillHeight);

// 初期化
setFillHeight();


/* sceoll Event */

//監視対象
const scrollTrigers = document.querySelectorAll('.scrollTrigger');

//Intersection Observerのオプション
const options = {
    root: null,
    rootMargin: "10% 0px",
    threshold: 0.3
};

//監視＋コールバック関数
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        //gsap coutAnime
        const activeAnime = entry.target.querySelector('.countAnime')
        let countAnimation = gsap.timeline();
        countAnimation.from(activeAnime, {
          duration: .5,
          ease: "none",
          innerText: 0,
          roundProps: "innerText",
        }, "<");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, options);

scrollTrigers.forEach(el => {
  observer.observe(el);
});



/*slider*/
let slideSwiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  breakpoints: {
    840: {
      centeredSlides: true,
      slidesPerView: 1.75
    },
  }
});