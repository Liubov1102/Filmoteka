import refs from '../constants/refs';
import { refsDarkTheme } from '../constants/dynamicRefs';

const localTheme = localStorage.getItem('color-theme');

if (localTheme === 'dark-theme') {
  refs.bodyTheme.classList.add('dark-theme');
}

const localCxheckboxLog = localStorage.getItem('checkbox-theme') || '';

if (localCxheckboxLog !== '') {
  refs.btnTheme.checked = true;
}

function darkThemeColor() {
  refs.bodyTheme.classList.toggle('dark-theme');
  switchThemeColor();
}

function switchThemeColor() {
  if (refsDarkTheme('isDarkTheme')) {
    localStorage.setItem('checkbox-theme', 'true'); // add
    localStorage.setItem('color-theme', 'dark-theme'); // add
  } else {
    localStorage.removeItem('color-theme'); // remove
    localStorage.removeItem('checkbox-theme'); // remove
  }
}

refs.btnTheme.addEventListener('click', darkThemeColor);
