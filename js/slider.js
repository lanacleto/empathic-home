const fixedDiv = document.querySelector('body > div.div-block-16.closeall')
const xInFixed = fixedDiv.querySelector('body > div.div-block-16.closeall > img.x-in-fixed')
const divWithAll = document.querySelector('.div-block-8')
const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')
const img = fixedDiv.querySelector('.img-in-fixed')
const textInInfo = document.querySelector('.heading-7')

const infos = [
  "Charming Front Entry Home",
  "Large Covered Carport",
  "Chef's Kitchen",
  "Fully Upgraded Home",
  "Great Floorplan",
  "Master Bathroom",
  "Bathroom",
  "Guest Bedroom #1"
]

function putLabel(el, numberImg, isLeft=false) {
  try {
    const parentEl = el.parentNode
    textInInfo.innerHTML = parentEl.querySelector('.heading-6').innerText
  } catch (e) {
    if(infos[numberImg] == undefined || infos[numberImg - 2] == undefined) return
    if(isLeft) {
      console.log(numberImg - 2)
      textInInfo.innerHTML = infos[numberImg - 2]
      return
    }
    textInInfo.innerHTML = infos[numberImg]
    console.log(infos[numberImg])
  }
}

divWithAll.addEventListener('click', e => {
  const clickedEl = e.target
  const srcImg = clickedEl.getAttribute('src')
  fixedDiv.style.display = 'flex'

  img.setAttribute('src', srcImg)

  putLabel(clickedEl, false)
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
    putLabel(null, numberImg)
  }
  if(el.getAttribute('src') == 'images/left-white.svg'){
    let currentSrc = img.getAttribute('src')
    const numberImg = currentSrc.slice(7, 8)
    
    if(numberImg >= 2) {
      img.setAttribute('src', `images/${parseInt(numberImg) - 1}.jpg`)
    }
    putLabel(null, numberImg, true)
  }
  
})
