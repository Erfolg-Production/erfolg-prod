var menu_bar = document.getElementById("menubar");
count = 0

function menu_toggle(){
    if(count == 0){
        menu_bar.style.visibility = "visible";
        count = 1
    }else{
        menu_bar.style.visibility = "hidden";
        count = 0
    }
}


