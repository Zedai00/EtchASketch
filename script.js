let container = document.querySelector(".pad")

function createGrid(size) {
  let pixelSize = container.clientWidth / size
  for (let i = 0; i < size * size; i++) {
    let pixel = document.createElement('div')
    pixel.classList.add('pixel')
    pixel.style.width = `${pixelSize}px`
    pixel.style.height = `${pixelSize}px`
    container.appendChild(pixel)
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let opacity = 1

function addEvent() {
  let pixels = document.querySelectorAll('.pixel')
  pixels.forEach((elm) => {
    elm.addEventListener('mouseover', () => {
      let r = getRandomInt(255)
      let g = getRandomInt(255)
      let b = getRandomInt(255)
      elm.style.background = `rgba(${r}, ${g}, ${b}, ${opacity})`
      if (opacity < 0) {
        opacity = 1
      } else {
        opacity = (opacity - 0.1)
      }
    })
  })
}

function promptGrid() {
  let size = parseInt(prompt("Enter Grid Size (Max: 100): "))
  createGrid(size)
}

let newSize = document.querySelector(".button")
newSize.addEventListener('click', () => {
  container.innerHTML = ''
  promptGrid()
  addEvent()
})

promptGrid()
addEvent()
