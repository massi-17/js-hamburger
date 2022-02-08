// dichiaro le variabili e le collego alle classi dell'html
const hamburgerIconOpen = document.querySelector(".fas.fa-bars");
const hamburgerIconClose = document.querySelector(".fas.fa-times");
const hamburgerMenuLink = document.querySelector(".hamburger-menu");

// creo un evento al click dell'icona hamburger
hamburgerIconOpen.addEventListener("click", function(){
    // al click si aggiunge la classe active e quindi il display block che contiene
    hamburgerMenuLink.classList.add("active");

})


// creo un evento al click dell'icona cross
hamburgerIconClose.addEventListener("click", function(){
    // al click si rimuove la classe active e quindi il display torna ad essere none
    hamburgerMenuLink.classList.remove("active");

})