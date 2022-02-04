/*function Menu (){
        let imenu = document.getElementById('servicesblock');
        if (imenu.style.display == "flex"){
            imenu.style.display = "none"; 
        }
        else{
            imenu.style.display = "flex";}
}
*/

/* кнопка */
/*
let button = document.getElementById('button-container')
let ButtDoge = document.getElementById('ButtDoge')
let ButtCat = document.getElementById('ButtCat')
let buttonState = true;

button.addEventListener('click', function(){
  if (buttonState) {
    document.getElementById("my-button").style.transform = "translateX(112px)"; 
    buttonState = false;
    ButtDoge.innerText = 'Кошка'
    ButtCat.innerText = 'Собака'
    ButtCat.style.transform = "translateX(-112px)";
  } else {
    document.getElementById("my-button").style.transform = "translateX(0px)";
    buttonState = true;
    ButtDoge.innerText = 'Собака'
    ButtCat.innerText = 'Кошка'
    ButtCat.style.transform = "translateX(0px)";
  }
    
})
*/

/* Вопросы и ответы  */
function displayBlock (elId){
  let imenu = document.getElementById(elId);
  imenu.style.display = imenu.style.display == 'block' ? 'none' : 'block'
}


function workerToDo(id,len=4) {
  for(let i = 1; i<=len; i++) document.getElementById('worker-block'+i).style.display = 'none'
   let activeworker = document.getElementById(id)
   activeworker.style.display = 'block'
  //setInterval()
  //setTimeout()
  //WindowTimers
}


const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 1,
  resistanceRatio: 1,
  autoHeight: false,

  pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
  },
  /* стрелки */
  navigation: {
      nextEl: '.swapbuttons-next',
      prevEl: '.swapbuttons-prev',
  },
  breakpoints: {
    320:{
      slidesPerView: 1,
      spaceBetween: 80,
    },
    480:{
      slidesPerView: 1.2,
      spaceBetween: 0,
    },
    992:{
      slidesPerView: 2,
      spaceBetween: 0,
     
    },
    1440:{
      slidesPerView: 3,
      spaceBetween: 0,
      
    },
    
  }
}); 
swiper.width = 450;

