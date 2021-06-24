import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {

    this.product = product;
    this.render();
    this.elem.addEventListener('click', this.onClick.bind(this));
    this.elem.addEventListener('product-add', (event) => {
    
    })
  }

  render(){
    this.elem = document.createElement('div');
    this.cardTop = document.createElement('div');
    this.img1 = document.createElement('img');
    this.cardPrice = document.createElement('span');
    this.cardBody = document.createElement('div');
    this.cardTitle = document.createElement('div');
    this.cardButton = document.createElement('button');
    this.img2 = document.createElement('img');

      this.elem.className = 'card';
      this.cardTop.className = 'card__top';
      this.img1.className = 'card__image';
      this.img1.src = '/assets/images/products/' + this.product.image;
      this.cardPrice.className = 'card__price';
      this.cardPrice.insertAdjacentHTML('beforeend', '€' + this.product.price.toFixed(2));
      this.cardBody.className = 'card__body';
      this.cardTitle.className = 'card__title';
      this.cardTitle.insertAdjacentHTML('beforeend', this.product.name);
      this.cardButton.className = 'card__button';
      this.img2.src = '/assets/images/icons/plus-icon.svg';
      this.img2.alt = 'icon';

      this.cardButton.insertAdjacentHTML('beforeEnd', this.img2.outerHTML);
      this.cardBody.insertAdjacentHTML('beforeEnd', this.cardTitle.outerHTML);
      this.cardBody.insertAdjacentHTML('beforeEnd', this.cardButton.outerHTML);
      this.cardTop.insertAdjacentHTML('beforeend', this.cardPrice.outerHTML);
      this.cardTop.insertAdjacentHTML('beforeend', this.img1.outerHTML);
      this.elem.insertAdjacentHTML('beforeend', this.cardTop.outerHTML);
      this.elem.insertAdjacentHTML('beforeend', this.cardBody.outerHTML);
    
}

  onClick(){
    this.elem.dispatchEvent(new CustomEvent("product-add", {
      detail: this.product.id,
      bubbles: true
}));
  }  
}

