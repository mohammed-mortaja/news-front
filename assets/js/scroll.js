// header event
window.addEventListener("scroll" , function () {
 var header = document.querySelector("header");
 header.classList.toggle("sticky" , window.scrollY > 0);
    
})


//  to-top event
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll" ,() => {
    if (window.scrollY > 100) {
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");

    }
        
    })

    // search btn
let search = document.querySelector(".boxsearch");
let iconSearch = document.querySelector(".search");
let closeIcon = document.querySelector(".close");
iconSearch.onclick = _ =>{
    search.style.display = "flex";
    search.style.position = "fixed";
    
     
    }
    closeIcon.onclick = _ =>{
     search.style.display = "none"
    }
