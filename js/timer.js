import Sound from './sounds.js'
const sounds = Sound()

export default function Timer({ minutesDisplay, secondsDisplay }) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function reset() {
    updateTimerDisplay(minutes, 0)
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      if (minutes == 0 && seconds == 0) {
        reset()
        sounds.endAudio()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateTimerDisplay(minutes, seconds - 1)

      countdown()
    }, 1000)
  }

  function timeUp() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes + 5, seconds)
  }

  function timeDown() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (minutes - 5 > 0) {
      updateTimerDisplay(minutes - 5, seconds)
    } else {
      return
    }
  }

  function pause() {
    clearTimeout(timerTimeOut)
  }
  return {
    countdown,
    timeUp,
    timeDown,
    pause
  }
}
