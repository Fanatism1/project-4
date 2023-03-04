let count = 0 
let box = document.querySelector('.section2__block2-box')
let buttonNext = document.querySelector('.block3__button-next')
let next = function(){
    //count += 93.75 //1200
    if (window.innerWidth>728){
      count += 93.75
      if (count > 93.75){ //1200
        count = 0
      }
      box.style.left = -count + 'vw'
    } else{
      count += 43.75
      if (count > 175){ //1200
        count = 0
      }
      box.style.left = -count + 'vw'
    }
 }
buttonNext.addEventListener('click' , next) 
let buttonBack = document.querySelector('.block3__button-back')
let back = function (){
  if (window.innerWidth>728){
    count -= 93.75
    if (count <0){ //1200
      count = 93.75
    }
    box.style.left = -count + 'vw'
  } else{
    count -= 43.75
    if (count < 0){ //1200
      count = 175
    }
    box.style.left = -count + 'vw'
  }
}
buttonBack.addEventListener('click', back)

let block1ContainerLi = document.querySelector('.block1__container-li')
let blok1Li =  function() {
  let ul = document.querySelector('.li__div-ul')
  if (ul.style.display == "none"){
    ul.style.display = "block"
  }else {
    ul.style.display = "none"
  } 
}
block1ContainerLi.addEventListener('click', blok1Li)

let burBoxLogo = document.querySelector('.burger__box-logo')
let burderLogo = function(){
  let X = document.querySelector('.burger__menu-block')
  X.style.display = "block"
  document.querySelector('.nav__block1').style.display = 'none'
  document.querySelector('.nav__block2').style.display = 'none'
  document.querySelector('.nav__container').style.padding = 0
  document.querySelector('.burger__menu-block').style.display = 'block'
  document.querySelector('.container').style.height = 100 + 'vh'
}
burBoxLogo.addEventListener('click', burderLogo )

let burXbox = document.querySelector('.burger__X-box')
let burgerX = function(){
  document.querySelector('.burger__menu-block').style.display = 'none'
  document.querySelector('.nav__block1').style.display = 'block'
  document.querySelector('.nav__block2').style.display = 'block'
  document.querySelector('.nav__container').style.padding = 12 + 'px' , 24 + 'px' , 12 + 'px' , 24 + 'px'
  document.querySelector('.container').style.display = 'block'
  document.querySelector('.container').style.height = 'auto'
}
burXbox.addEventListener('click', burgerX )

