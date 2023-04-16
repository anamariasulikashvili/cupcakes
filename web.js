$('.nav-1').hover(function(){  
      $(".nav-items-1").toggleClass("navActive")
})

let menu = document.querySelector('.burger');
menu.onclick = function(){
    let navBar = document.querySelector('.header');
    navBar.classList.toggle('active');
}