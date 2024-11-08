'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const themeSwitcher = document.getElementById('themeSwitcher');
  let isDarkMode = false;

// Theme Switcher
themeSwitcher.addEventListener('click', function () {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode', isDarkMode);
  themeSwitcher.textContent = isDarkMode ? 'Light mode' : 'Dark mode';
  });
});

/*---------------------------------------------------------
Unit Converter
----------------------------------------------------------*/
const toCel = document.querySelector('#toCelsius');
const toFeh = document.querySelector('#toFahrenheit');
const input = document.querySelector('.temperature');
const output = document.querySelector('.output');
const convertBtn = document.querySelector('.convert-btn');
let convertTo = true; //automaticaly select cel from the start

toCel.addEventListener('click', function()  {
  convertTo = true;
});

toFeh.addEventListener('click', function()  {
  convertTo = false;
});

convertBtn.addEventListener('click', function(event) {
  //prevent the form from refreshing
  event.preventDefault();
  if(validat()) {
    if(convertTo) {
      convertToCelsius(parseFloat(input.value));
    } else {
      convertToFahrenheit(parseFloat(input.value));
    }
  }
});

function validat() {
  let isValid = true;
  let isNull = parseFloat(input.value);

  if (input.value.length === 0) {
    output.innerText = "Must enter something";
    isValid = false;
  }

  if (isNaN(isNull) && input.value.length > 0) {
    output.innerText = "Only use numbers and - symble only";
    isValid = false;
  } 

  if(isValid){
    return true;
  }
  return false;
}

function convertToCelsius(num) {
  output.innerText = `${(num - 32) / 1.8}C`;
}

function convertToFahrenheit (num) {
  output.innerText = `${(num * 1.8) + 32}F`;
}