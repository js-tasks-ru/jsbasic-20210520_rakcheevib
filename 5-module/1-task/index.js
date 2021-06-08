function hideSelf(event) {
  let btn = document.querySelector('.hide-self-button');
  btn.addEventListener('click', () => {
    btn.setAttribute('hidden', '');
  })
}
