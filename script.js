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

function addEvent() {
  let pixels = document.querySelectorAll('.pixel')
  pixels.forEach((elm) => {
    elm.addEventListener('mouseover', () => {
      elm.style.background = 'blue'
    })
  })
}

createGrid(50)
addEvent()
