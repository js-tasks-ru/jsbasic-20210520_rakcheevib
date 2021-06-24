import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render();  
    this.elem.addEventListener('click', this.onClick.bind(this));
    this.elem.addEventListener('product-add', (event) => {
    })  

  }

  render(){

      this.elem = createElement(`<div class="carousel">
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left" style = "display: none">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    </div>`);
    this.carouselInner = document.createElement('div');
    this.carouselInner.className = 'carousel__inner';
    

    for(const slide of this.slides){
      this.item = createElement(
      `<div class="carousel__slide" data-id="${slide.id}">
            <img
        src="/assets/images/carousel/${slide.image}"
      class="carousel__img"
        alt="slide"
            />
            <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
        <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon" />
            </button>
            </div>
            </div>`)
    this.carouselInner.insertAdjacentHTML('beforeEnd', this.item.outerHTML);
      }

    this.slidesCounter = 1;

    this.elem.insertAdjacentHTML('beforeEnd', this.carouselInner.outerHTML);
    }

    onClick(ev){
      if(ev.target.closest('div').classList.contains( 'carousel__arrow_right')){
      this.slideWidth = ev.target.closest('.carousel').offsetWidth;
      document.querySelector('.carousel__inner').style.transform = `translateX(-${this.slideWidth*this.slidesCounter}px)`;
      this.slidesCounter ++;
      document.querySelector('.carousel__arrow_left').style.display = 'flex';
      if(this.slidesCounter >= this.slides.length){
        ev.target.closest('div.carousel__arrow_right').style.display = 'none';
      }
};

if(ev.target.closest('div').classList.contains( 'carousel__arrow_left')){
  this.slideWidth = ev.target.closest('.carousel').offsetWidth;
  this.slidesCounter -= 2;
  document.querySelector('.carousel__inner').style.transform = `translateX(-${this.slideWidth*this.slidesCounter}px)`;
};

   if(ev.target.closest('button')){
    this.elem.dispatchEvent(new CustomEvent("product-add", {
      detail: ev.target.closest('.carousel__slide').dataset.id,
      bubbles: true
}))
  }
    
  }

}
