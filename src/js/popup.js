export default class Popup {
  constructor(text, title) {
    this.text = text;
    this.title = title;
    this.button = document.querySelector('.btn');
    this.popup;
  }

  init() {
    this.popup = document.createElement('div');
    this.popup.className = 'popup hidden';
    this.popup.innerHTML = `<p class="popup-title">${this.title}</p><p class="popup-text">${this.text}</p>`;
    this.button.insertAdjacentElement('afterend', this.popup);
  }

  show() {
    this.init();
    this.popup.classList.remove('hidden');
    this.popup.style.bottom = `${this.button.offsetTop + 50}px`;
    this.popup.style.left = `${this.button.offsetLeft - ((this.popup.offsetWidth - this.button.offsetWidth) / 2)}px`;
  }

  hide() {
    this.button.nextElementSibling.remove();
    console.log('remove');
  }
}
