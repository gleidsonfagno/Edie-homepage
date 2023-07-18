var navgationHeader = document.getElementById("navgation_header");

var showSidebar = false

function toggleSidebar(){
    showSidebar = !showSidebar
    if(showSidebar){
        navgationHeader.style.marginLeft = "0"
        console.log(showSidebar)
        // true
    }else{
        navgationHeader.style.marginLeft = "-100vw"
        console.log(showSidebar)
        false
    }
}

window.addEventListener('resize', function(event) {
    if(window.innerWidth > 900 && showSidebar) 
    {  
        showSidebar = true;
        toggleSidebar();
    }
});

AOS.init();