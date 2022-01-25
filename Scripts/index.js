function Menu (){
        let imenu = document.getElementById('servicesblock');
        if (imenu.style.display == "flex"){
            imenu.style.display = "none"; 
        }
        else{
            imenu.style.display = "flex";}
}

function anser1(){
    let emenu = document.getElementById('answer1');
    if (emenu.style.display == "block"){
        emenu.style.display = "none"; 
    }
    else{
        emenu.style.display = "block";}
}
function anser2(){
    let emenu = document.getElementById('answer2');
    if (emenu.style.display == "block"){
        emenu.style.display = "none"; 
    }
    else{
        emenu.style.display = "block";}
}
function anser3(){
    let emenu = document.getElementById('answer3');
    if (emenu.style.display == "block"){
        emenu.style.display = "none"; 
    }
    else{
        emenu.style.display = "block";}
}
function anser4(){
    let emenu = document.getElementById('answer4');
    if (emenu.style.display == "block"){
        emenu.style.display = "none"; 
    }
    else{
        emenu.style.display = "block";}
}





/*
    let i = 1;
    for(let li of carousel.querySelector('li')) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
    }

    // конфигурация 
    let width = 150; // ширина картинки
    let count = 2; // видимое количество изображений

    let list = carousel.querySelector('ul');
    let listElems = carousel.querySelectorAll('li');

    let position = 0; // положение ленты прокрутки

    carousel.querySelector('.prev').onclick = function() {
      // сдвиг влево
      position += width * count;
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function() {
      // сдвиг вправо
      position -= width * count;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };

    */