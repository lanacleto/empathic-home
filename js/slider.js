const fixedDiv = document.querySelector('body > div.div-block-16.closeall')
const xInFixed = fixedDiv.querySelector('body > div.div-block-16.closeall > img.x-in-fixed')
const divWithAll = document.querySelector('.div-block-8')
const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')
const img = fixedDiv.querySelector('.img-in-fixed')

divWithAll.addEventListener('click', e => {
  const clickedEl = e.target
  const srcImg = clickedEl.getAttribute('src')
  fixedDiv.style.display = 'flex'

  img.setAttribute('src', srcImg)
})

fixedDiv.addEventListener('click', (e) => {
  const el = e.target
  if(el.getAttribute('src') == 'images/600px-Cross_icon_white.svg.png'){
    fixedDiv.style.display = 'none'
  }
  if(el.getAttribute('src') == 'images/right-white.svg'){
    let currentSrc = img.getAttribute('src')
    const numberImg = currentSrc.slice(7, 8)
    if(numberImg <= 7) {
      img.setAttribute('src', `images/${parseInt(numberImg) + 1}.jpg`)
    }
  }
  if(el.getAttribute('src') == 'images/left-white.svg'){
    let currentSrc = img.getAttribute('src')
    const numberImg = currentSrc.slice(7, 8)
    
    if(numberImg >= 2) {
      img.setAttribute('src', `images/${parseInt(numberImg) - 1}.jpg`)
    }
  }
  
})
