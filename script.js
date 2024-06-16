let container = document.querySelector(".pad")

for (let i = 0; i < 16; i++) {
  let row = document.createElement('div')
  row.classList.add('row')
  for (let j = 0; j < 16; j++) {
    let col = document.createElement('div')
    col.classList.add('col')
    row.appendChild(col)
  }
  container.appendChild(row)
}

let pixels = document.querySelectorAll('.col')

pixels.forEach((elm) => {
  elm.addEventListener('mouseover', () => {
    elm.style.background = 'blue'
  })
})
