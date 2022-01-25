function Menu (){
        let imenu = document.getElementById('servicesblock');
        if (imenu.style.display == "flex"){
            imenu.style.display = "none"; 
        }
        else{
            imenu.style.display = "flex";}
}

function menuid (element_id){   
    let obj = document.getElementById(element_id); 
        if (obj.style.display != "block") { 
            obj.style.display = "block"; 
        }
    else obj.style.display = "none"; 
}       