/*function Menu (){
        let imenu = document.getElementById('servicesblock');
        if (imenu.style.display == "flex"){
            imenu.style.display = "none"; 
        }
        else{
            imenu.style.display = "flex";}
}
*/

/* Вопросы и ответы  */
function menuid (element_id){   
    let obj = document.getElementById(element_id); 
        if (obj.style.display != "block") { 
            obj.style.display = "block"; 
        }
    else obj.style.display = "none"; 
}       


/* кнопка */
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
