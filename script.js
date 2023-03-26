const container = document.getElementsByClassName("container")
const popUp = document.getElementsByClassName("pop-up")

function openPopup() {
  popUp[0].style.display = "block"
  container[0].style.backgroundColor = "#0000007d"
}
function closePopup() {
  popUp[0].style.display = "none"
  container[0].style.backgroundColor = "white"
}
