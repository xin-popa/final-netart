

const mouth2 = document.querySelector('.mouth2')
const water = document.querySelector('.water')
const mouth4 = document.querySelector('.mouth4')
const mouth5 = document.querySelector('.mouth5')
const mouth6 = document.querySelector('.mouth6')

function moveMouth2 (){
   mouth2.style.top = Math.random() * innerHeight + 'px'
   mouth2.style.left = Math.random() * innerWidth + 'px'
}

function moveMouth4 (){
   mouth4.style.top = Math.random() * innerHeight + 'px'
   mouth4.style.left = Math.random() * innerWidth + 'px'
}

function moveMouth5 (){
   mouth5.style.top = Math.random() * innerHeight + 'px'
   mouth5.style.left = Math.random() * innerWidth + 'px'
}

function moveMouth6 (){
   mouth6.style.top = Math.random() * innerHeight + 'px'
   mouth6.style.left = Math.random() * innerWidth + 'px'
}

function waitAsec() {
  setTimeout(moveMouth2, 300)

}

function waitAsec() {
  setTimeout(moveMouth4, 250)

}

function waitAsec() {
  setTimeout(moveMouth5, 250)

}

function waitAsec() {
  setTimeout(moveMouth6, 200)

}

function changeMouth2 () {
  water.play()
  mouth2.setAttribute('src', 'images/mouth/mouth1.gif')
}

function changeMouth4 () {
  water.play()
  mouth4.setAttribute('src', 'images/mouth/mouth1.gif')
}

function changeMouth5 () {
  water.play()
  mouth5.setAttribute('src', 'images/mouth/mouth1.gif')
}

function changeMouth6 () {
  water.play()
  mouth6.setAttribute('src', 'images/mouth/mouth1.gif')
}


function keyWasPressed(e){
  if (e.key == 'Enter'){
  }
}

mouth2.addEventListener('mouseover', waitAsec)
mouth2.addEventListener('click', changeMouth2)

mouth4.addEventListener('mouseover', waitAsec)
mouth4.addEventListener('click', changeMouth4)

mouth5.addEventListener('mouseover', waitAsec)
mouth5.addEventListener('click', changeMouth5)

mouth6.addEventListener('mouseover', waitAsec)
mouth6.addEventListener('click', changeMouth6)

window.addEventListener('keypress', keyWasPressed)
