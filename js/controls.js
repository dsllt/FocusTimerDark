export default function Controls({
  buttonForest,
  buttonRain,
  buttonShop,
  buttonFire
}) {
  function reset() {
    buttonForest.classList.remove('selected')
    buttonRain.classList.remove('selected')
    buttonShop.classList.remove('selected')
    buttonFire.classList.remove('selected')
  }
  return { reset }
}
