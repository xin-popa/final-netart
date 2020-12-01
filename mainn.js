

const clean = document.querySelector('.clean')
const water = document.querySelector('.water')
const redcat = document.querySelector('.redcat')
const pointcat = document.querySelector('.pointcat')
const phone = document.querySelector('.phone')

function moveClean (){
   clean.style.top = Math.random() * innerHeight + 'px'
   clean.style.left = Math.random() * innerWidth + 'px'
}

function moveRedcat (){
   redcat.style.top = Math.random() * innerHeight + 'px'
   redcat.style.left = Math.random() * innerWidth + 'px'
}

function movePointcat (){
   pointcat.style.top = Math.random() * innerHeight + 'px'
   pointcat.style.left = Math.random() * innerWidth + 'px'
}

function movePhone (){
   phone.style.top = Math.random() * innerHeight + 'px'
   phone.style.left = Math.random() * innerWidth + 'px'
}

function waitAsec() {
  setTimeout(moveClean, 300)

}

function waitAsec() {
  setTimeout(moveRedcat, 250)

}

function waitAsec() {
  setTimeout(movePointcat, 250)

}

function waitAsec() {
  setTimeout(movePhone, 250)

}

function changeClean () {
  water.play()
  clean.setAttribute('src', 'images/hand/wash.gif')
}

function changeRedcat () {
  water.play()
  redcat.setAttribute('src', 'images/hand/fingercat.gif')
}

function changePointcat () {
  water.play()
  pointcat.setAttribute('src', 'images/hand/blackcat.gif')
}

function changePhone () {
  water.play()
  phone.setAttribute('src', 'images/hand/playpanda.gif')
}


function keyWasPressed(e){
  if (e.key == 'Enter'){
  }
}

clean.addEventListener('mouseover', waitAsec)
clean.addEventListener('click', changeClean)

redcat.addEventListener('mouseover', waitAsec)
redcat.addEventListener('click', changeRedcat)

pointcat.addEventListener('mouseover', waitAsec)
pointcat.addEventListener('click', changePointcat)

phone.addEventListener('mouseover', waitAsec)
phone.addEventListener('click', changePhone)

window.addEventListener('keypress', keyWasPressed)
