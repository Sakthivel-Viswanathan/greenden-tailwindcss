var sidenav=document.getElementById("sidenav");
var menuiscon=document.getElementById("menuicon");
var closenav=document.getElementById("close-nav");

menuiscon.addEventListener('click',function(){
    sidenav.style.right=0
})

closenav.addEventListener('click',function(){
sidenav.style.right="-50%"
})
