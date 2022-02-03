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



function worker (element_ide){

        let imenu = document.getElementById(element_ide);
        if (imenu.style.display == "block"){
            imenu.style.display = "none"; 
        }
        else{
            imenu.style.display = "block";}
}


function workertodo (workerid){
  let worker1 = document.getElementById('worker-block1');
  let worker2 = document.getElementById('worker-block2');
  let worker3 = document.getElementById('worker-block3');
  let worker4 = document.getElementById('worker-block4');
  let activeworker = document.getElementById(workerid);
  
  worker1.style.display = "none";
  worker2.style.display = "none";
  worker3.style.display = "none";
  worker4.style.display = "none";
  activeworker.style.display = "block";
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

