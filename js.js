let count = 0 
let box = document.querySelector('.section2__block2-box')
document.querySelector('.block3__button-next').onclick = function (){
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
 
document.querySelector('.block3__button-back').onclick = function (){
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
document.querySelector('.block1__container-li').onclick =  function() {
  let ul = document.querySelector('.li__div-ul')
  if (ul.style.display == "none"){
    ul.style.display = "block"
  }else {
    ul.style.display = "none"
  } 
}

document.querySelector('.burger__box-logo').onclick = function(){
  let X = document.querySelector('.burger__menu-block')
  X.style.display = "block"
  document.querySelector('.nav__block1').style.display = 'none'
  document.querySelector('.nav__block2').style.display = 'none'
  document.querySelector('.nav__container').style.padding = 0
  document.querySelector('.burger__menu-block').style.display = 'block'
  document.querySelector('.container').style.height = 100 + 'vh'
}
document.querySelector('.burger__X-box').onclick = function(){
  document.querySelector('.burger__menu-block').style.display = 'none'
  document.querySelector('.nav__block1').style.display = 'block'
  document.querySelector('.nav__block2').style.display = 'block'
  document.querySelector('.nav__container').style.padding = 12 + 'px' , 24 + 'px' , 12 + 'px' , 24 + 'px'
  document.querySelector('.container').style.display = 'block'
  document.querySelector('.container').style.height = 'auto'
}


