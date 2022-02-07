
/* Вопросы и ответы  */
function displayBlock (elId){
  let imenu = document.getElementById(elId);
  imenu.style.display = imenu.style.display == 'block' ? 'none' : 'block'
}


function workerToDo(id,len=4) {
  for(let i = 1; i<=len; i++) document.getElementById('worker-block'+i).style.display = 'none'
   let activeworker = document.getElementById(id)
   activeworker.style.display = 'block'
}

let toogleDown = (item, itemSvg) => {
  let itemId = document.getElementById(item)
  const ch = itemId.clientHeight,
    sh = itemId.scrollHeight,
    isCollapsed = !ch,
    noHeightSet = !itemId.style.height;
    itemId.style.height = (isCollapsed || noHeightSet ? sh : 0) + "px";
  svgBlock(itemSvg)
};


function svgBlock (item){
  let itemDom = document.getElementById(item);
  itemDom.style.display = itemDom.style.display == 'block' ? 'none' : 'block'
  let itemDom1 = document.getElementById(item +1);
  itemDom1.style.display = itemDom.style.display == 'block' ? 'none' : 'block'
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


