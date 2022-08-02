import {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonForest,
  buttonRain,
  buttonShop,
  buttonFire,
  buttonLightMode,
  buttonDarkMode,
  timerText,
  buttonControls,
  buttonSounds,
  volumeSlider,
  rangeInputs
} from './variables.js'

import Sounds from './sounds.js'

var sound = Sounds()

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  }
  const min = target.min
  const max = target.max
  const val = target.value

  target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%'
}

for (let value of rangeInputs) {
  value.onclick = function (e) {
    e.stopPropagation()
    return false
  }
}

export default function ({ controls, sound, timer }) {
  buttonForest.addEventListener('click', function () {
    if (buttonForest.classList[1] === undefined) {
      buttonForest.classList.add('selected')
      buttonRain.classList.remove('selected')
      buttonShop.classList.remove('selected')
      buttonFire.classList.remove('selected')
      sound.forestOn()
    } else {
      controls.reset()
      sound.forestOff()
    }
  })

  buttonRain.addEventListener('click', function () {
    if (buttonRain.classList[1] === undefined) {
      buttonForest.classList.remove('selected')
      buttonRain.classList.add('selected')
      buttonShop.classList.remove('selected')
      buttonFire.classList.remove('selected')
      sound.fireOn()
    } else {
      controls.reset()
      sound.fireOff()
    }
  })

  buttonShop.addEventListener('click', function () {
    if (buttonShop.classList[1] === undefined) {
      buttonForest.classList.remove('selected')
      buttonRain.classList.remove('selected')
      buttonShop.classList.add('selected')
      buttonFire.classList.remove('selected')
      sound.shopOn()
    } else {
      controls.reset()
      sound.shopOff()
    }
  })

  buttonFire.addEventListener('click', function () {
    if (buttonFire.classList[1] === undefined) {
      buttonForest.classList.remove('selected')
      buttonRain.classList.remove('selected')
      buttonShop.classList.remove('selected')
      buttonFire.classList.add('selected')
      sound.fireOn()
    } else {
      controls.reset()
      sound.fireOff()
    }
  })

  var executed = false

  buttonPlay.addEventListener('click', function () {
    if (!executed) {
      executed = true
      timer.countdown()
      sound.pressAudio()
    } else {
      sound.pressAudio()
    }
  })

  buttonStop.addEventListener('click', function () {
    timer.pause()
    sound.pressAudio()
    executed = false
  })

  buttonPlus.addEventListener('click', function () {
    timer.timeUp()
    sound.pressAudio()
  })

  buttonMinus.addEventListener('click', function () {
    timer.timeDown()
    sound.pressAudio()
  })

  buttonLightMode.addEventListener('click', function () {
    buttonLightMode.classList.add('hide')
    buttonDarkMode.classList.remove('hide')

    document.body.classList.add('darkMode')
    timerText.classList.add('darkMode')
    buttonControls.classList.add('darkMode')
    buttonSounds.classList.add('darkMode')
    volumeSlider.classList.add('darkMode')
  })

  buttonDarkMode.addEventListener('click', function () {
    buttonLightMode.classList.remove('hide')
    buttonDarkMode.classList.add('hide')

    document.body.classList.remove('darkMode')
    timerText.classList.remove('darkMode')
    buttonControls.classList.remove('darkMode')
    buttonSounds.classList.remove('darkMode')
    volumeSlider.classList.remove('darkMode')
  })

  rangeInputs.forEach(input => {
    input.addEventListener('input', handleInputChange)
  })

  rangeInputs.forEach(input => {
    input.addEventListener('change', function () {
      sound.forestAudio.volume = rangeInputs[0].value / 100
      sound.rainAudio.volume = rangeInputs[1].value / 100
      sound.shopAudio.volume = rangeInputs[2].value / 100
      sound.fireAudio.volume = rangeInputs[3].value / 100
    })
  })
}
