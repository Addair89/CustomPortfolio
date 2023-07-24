const card1 = document.querySelector('.card-1')
const card2 = document.querySelector('.card-2')
const card3 = document.querySelector('.card-3')
const card4 = document.querySelector('.card-4')
const card5 = document.querySelector('.card-5')
const card6 = document.querySelector('.card-6')
const card7 = document.querySelector('.card-7')
const card8 = document.querySelector('.card-8')
const card9 = document.querySelector('.card-9')
const card10 = document.querySelector('.card-10')
const card11 = document.querySelector('.card-11')
const card12 = document.querySelector('.card-12')
const card13 = document.querySelector('.card-13')
const card14 = document.querySelector('.card-14')
const card15 = document.querySelector('.card-15')
const card16 = document.querySelector('.card-16')
//const cardList2 = [card1,card2,card3,card4,card5,card6,card7,card8,card9,card10,card12,card13,card14,card15,card16]
// const cardsList = document.querySelectorAll('.card')
// const cards = Array.from(cardsList)

const arrows = document.querySelectorAll('.back-arrow')

function flipSide(e){
    const parentClasses = Array.from(e.target.parentElement.parentElement.classList);
    const classes = Array.from(e.target.parentElement.classList)
    const cardNumber = classes[1];

    if(parentClasses.includes(`card-${cardNumber}-front`)){
        const cardBackClass = `.card-${cardNumber}-back`;
        const cardFrontClass = `.card-${cardNumber}-front`
        console.log(card1);
        const cardBack = document.querySelector(cardBackClass);
        const cardFront = document.querySelector(cardFrontClass);
        cardBack.style.transform = 'rotateY(0deg)';
        cardFront.style.transform = 'rotateY(-180deg)';
    } else{
        const cardBackClass = `.card-${cardNumber}-back`;
        const cardFrontClass = `.card-${cardNumber}-front`
        console.log(card1);
        const cardBack = document.querySelector(cardBackClass);
        const cardFront = document.querySelector(cardFrontClass);
        cardBack.style.transform = 'rotateY(-180deg)';
        cardFront.style.transform = 'rotateY(0deg)';
    }

    console.log('Parent Classes Variable', parentClasses)
    console.log('Classes Variable', classes)
    console.log('CardNumber', cardNumber)
    // e.target.parentElement.style.transform = 'rotate'
}

// cards.forEach((element) => {
//     element.addEventListener('click',flipSide)
// })

arrows.forEach((element) => {
    element.addEventListener('click',flipSide)
})

// cardList2.forEach((el) =>{
//     console.log(el.children)
//     // el.addEventListener('click',flipSide)
// })

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