export default class Popup {
  constructor(text, title, element) {
    this.text = text;
    this.title = title;
    this.element = element;
    this.popup;
  }

  init() {
    this.popup = document.createElement('div');
    this.popup.className = 'popup hidden';
    this.popup.innerHTML = `<p class="popup-title">${this.title}</p><p class="popup-text">${this.text}</p>`;
    this.element.insertAdjacentElement('afterend', this.popup);
  }

  show() {
    this.init();
    this.popup.classList.remove('hidden');
    this.popup.style.bottom = `${this.element.offsetTop + 50}px`;
    this.popup.style.left = `${this.element.offsetLeft - ((this.popup.offsetWidth - this.element.offsetWidth) / 2)}px`;
  }

  hide() {
    this.element.nextElementSibling.remove();
  }
}
