const fixedDiv = document.querySelector('body > div.div-block-16.closeall')
const xInFixed = fixedDiv.querySelector('.x-in-fixed')
const divWithAll = document.querySelector('.div-block-8')

divWithAll.addEventListener('click', e => {
  const clickedEl = e.target
  const srcImg = clickedEl.getAttribute('src')
  fixedDiv.style.display = 'flex'

  const img = fixedDiv.querySelector('.img-in-fixed')

  img.setAttribute('src', srcImg)
})

xInFixed.addEventListener('click', () => {
  fixedDiv.style.display = 'none'
})
