const leg1 = document.querySelector('.leg1')
const water = document.querySelector('.water')
const leg2 = document.querySelector('.leg2')
const leg4 = document.querySelector('.leg4')
const leg5 = document.querySelector('.leg5')

function moveLeg1 (){
   leg1.style.top = Math.random() * innerHeight + 'px'
   leg1.style.left = Math.random() * innerWidth + 'px'
}

function moveLeg2 (){
   leg2.style.top = Math.random() * innerHeight + 'px'
   leg2.style.left = Math.random() * innerWidth + 'px'
}

function moveLeg4 (){
   leg4.style.top = Math.random() * innerHeight + 'px'
   leg4.style.left = Math.random() * innerWidth + 'px'
}

function moveLeg5 (){
   leg5.style.top = Math.random() * innerHeight + 'px'
   leg5.style.left = Math.random() * innerWidth + 'px'
}

function waitAsec() {
  setTimeout(moveLeg1, 300)

}

function waitAsec() {
  setTimeout(moveLeg2, 250)

}

function waitAsec() {
  setTimeout(moveLeg4, 250)

}

function waitAsec() {
  setTimeout(moveLeg5, 250)

}

function changeLeg1 () {
  water.play()
  leg1.setAttribute('src', 'images/leg/leg3.gif')
}

function changeLeg2 () {
  water.play()
  leg2.setAttribute('src', 'images/leg/leg3.gif')
}

function changeLeg4 () {
  water.play()
  leg4.setAttribute('src', 'images/leg/leg3.gif')
}

function changeLeg5 () {
  water.play()
  leg5.setAttribute('src', 'images/leg/leg3.gif')
}


function keyWasPressed(e){
  if (e.key == 'Enter'){
  }
}

leg1.addEventListener('mouseover', waitAsec)
leg1.addEventListener('click', changeLeg1)

leg2.addEventListener('mouseover', waitAsec)
leg2.addEventListener('click', changeLeg2)

leg4.addEventListener('mouseover', waitAsec)
leg4.addEventListener('click', changeLeg4)

leg5.addEventListener('mouseover', waitAsec)
leg5.addEventListener('click', changeLeg5)

window.addEventListener('keypress', keyWasPressed)
