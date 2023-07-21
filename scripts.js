function slider() {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    let currentSlide = 0;
    const maxSlide = slides.length;
    const dotContainer = document.querySelector('.dots');
    //i is the index, so we are translating them horazontaly either 0%, 100%, 200%. We put it in a function but i think this is a good reference
    // slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
    ////-------------functions---------------
    function createDots() {
      slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
          'beforeend',
          `<button class='dots__dot' data-slide='${i}'></button>`
        );
      });
    }
    ///-------------------------------------
    function goToSlide(slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    }
    //----------------------------------
    function activateDot(slide) {
      document
        .querySelectorAll('.dots__dot')
        .forEach(dot => dot.classList.remove('dots__dot--active'));
  
      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add('dots__dot--active');
    }
    //-----------------------------------
    function nextSlide() {
      if (currentSlide === maxSlide - 1) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }
      goToSlide(currentSlide);
      activateDot(currentSlide);
    }
    //-----------------------------------
    function prevSlide() {
      if (currentSlide === 0) {
        currentSlide = maxSlide;
      }
      currentSlide--;
      goToSlide(currentSlide);
      activateDot(currentSlide);
    }
    function intit() {
      createDots();
      goToSlide(currentSlide);
      activateDot(0);
    }
    intit();
      ////////////----------event handlers---------------
  //go to next slide
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const slide = e.target.dataset.slide;
      goToSlide(slide);
      activateDot(slide);
    }
  });
}
slider();