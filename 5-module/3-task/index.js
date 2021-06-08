function initCarousel() {
  let btnRight = document.querySelector('.carousel__arrow_right');
  let btnLeft = document.querySelector('.carousel__arrow_left');
  let slideWidth = document.querySelector('.carousel__slide').offsetWidth;
  let slidesWidthSumm = 0;

  let slider = document.querySelector('.carousel__inner');

  btnRight.addEventListener('click', () => {
    slidesWidthSumm += slideWidth;
    slider.style.transform = `translateX(-${slidesWidthSumm}px)`;
    isBtnsVisible();
  })
  btnLeft.addEventListener('click', () => {
    slidesWidthSumm -= slideWidth;
    slider.style.transform = `translateX(-${slidesWidthSumm}px)`;
    isBtnsVisible();
  })
  isBtnsVisible = () => {
    if(slidesWidthSumm === 0 ){
      btnLeft.style.display = 'none';
    }
    else if(slidesWidthSumm > 1400 ){
      btnRight.style.display = 'none';
    }
    else if(slidesWidthSumm !== 0 && slidesWidthSumm < 2000){
      btnLeft.style.display = 'flex';
      btnRight.style.display = 'flex';
    }
  }
  isBtnsVisible();

}
