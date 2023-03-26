const container = document.getElementsByClassName("container")
const popUp = document.getElementsByClassName("pop-up")
const inerPopUp = document.getElementsByClassName("iner-pop-up-con")

function openPopup() {
  popUp[0].style.display = "block"
  container[0].style.backgroundColor = "#0000007d"
  setTimeout(() => {
    inerPopUp[0].style.transform = "translate(-50%, -50%) scale(1)"
  }, 50)
}
function closePopup() {
  popUp[0].style.display = "none"
  container[0].style.backgroundColor = "white"
  inerPopUp[0].style.transform = "translate(-50%, -50%) scale(0)"
}
