// slider
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const sliderBtns = document.querySelectorAll(".slider-btn");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hamburgerDropDown = document.querySelector(".dropdownbtn-content");

// hamburger button

const handleHamburger = (e) =>{
  hamburgerDropDown.classList.toggle("hide");
}

hamburgerBtn.addEventListener("click", handleHamburger);

// slider
let currSlide = 0;
let maxSlide = slides.length;

sliderBtns.forEach(el => el.addEventListener("click", function(e){
  e.preventDefault();
}));

const goToSlide = function(slide){
  slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i-slide)}%)`);
};

goToSlide(0);

// Next Slide
const nextSlide = function(){
  if(currSlide === (maxSlide - 1)){
    currSlide = 0;
  }
  else{
    currSlide++;
  }
  goToSlide(currSlide);
};


if(btnRight){
  btnRight.addEventListener("click", nextSlide);
}

const prevSlide = function(){
  if(currSlide === 0){
    currSlide = maxSlide-1;
  }
  else{
    currSlide--;
  }
  goToSlide(currSlide);
};

if(btnLeft){
  btnLeft.addEventListener("click",prevSlide );
}

document.addEventListener("keydown", function(e){
 if(e.key === "ArrowLeft"){
   prevSlide();
 }
 else if(e.key === "ArrowRight"){
   nextSlide();
 }
});
