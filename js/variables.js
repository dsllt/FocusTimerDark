let buttonPlay = document.querySelector('.play')
let buttonStop = document.querySelector('.stop')
let buttonPlus = document.querySelector('.plus')
let buttonMinus = document.querySelector('.minus')

let buttonForest = document.querySelector('.sound1')
let buttonRain = document.querySelector('.sound2')
let buttonShop = document.querySelector('.sound3')
let buttonFire = document.querySelector('.sound4')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let buttonLightMode = document.querySelector('.lightMode')
let buttonDarkMode = document.querySelector('.darkMode')
let timerText = document.querySelector('.time')
let buttonControls = document.querySelector('.controls')
let buttonSounds = document.querySelector('.sounds')
let volumeSlider = document.querySelector('.inputSlider')

const rangeInputs = document.querySelectorAll('input[type="range"]')

export {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonForest,
  buttonRain,
  buttonShop,
  buttonFire,
  minutesDisplay,
  secondsDisplay, 
  buttonLightMode,
  buttonDarkMode,
  timerText,
  buttonControls,
  buttonSounds,
  volumeSlider,
  rangeInputs
}
