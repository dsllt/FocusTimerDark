import Timer from './timer.js'
import Controls from './controls.js'
import {
  buttonForest,
  buttonRain,
  buttonShop,
  buttonFire,
  minutesDisplay,
  secondsDisplay,
  volumeSlider
} from './variables.js'
import Sounds from './sounds.js'
import Events from './events.js'

const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

const controls = Controls({
  buttonForest,
  buttonRain,
  buttonShop,
  buttonFire
})

const sound = Sounds()

Events({ controls, sound, timer })


