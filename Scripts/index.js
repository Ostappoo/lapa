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
function menuid (element_id){   
    let obj = document.getElementById(element_id); 
        if (obj.style.display != "block") { 
            obj.style.display = "block"; 
        }
    else obj.style.display = "none"; 
}       

const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 20,
  autoResize: false,
  slidesPerGroup: 1,
  resistanceRatio: 1,
  autoHeight: false,
  autoResize: false,

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
    },
    480:{
      slidesPerView: 2,
      spaceBetween: -80,
    },
    992:{
      slidesPerView: 2,
      spaceBetween: -80,
    },
    1440:{
      slidesPerView: 3,
      spaceBetween: 0,
    },
    
  }
}); 
swiper.width = 450;

