import Popup from './popup';

const button = document.querySelector('.btn');
const text = "And here's some amazing content. It's very engaging. Right?";
const title = 'Popover title';
const popover = new Popup(text, title);

button.addEventListener('click', () => {
  if (!document.querySelector('.popup')) {
    popover.show();
  } else {
    popover.hide();
  }
});
