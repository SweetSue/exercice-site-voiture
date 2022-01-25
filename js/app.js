
// EXAMPLE
// https://www.freecodecamp.org/news/javascript-addeventlistener-example-code/
// let button = document.querySelector('#button');
// let msg = document.querySelector('#message');

// button.addEventListener('click', ()=>{
//   msg.classList.toggle('reveal');
// })


// SELECTION ADRESSE

let button = document.getElementById('button');
let openMenu = document.getElementById('main-menu');
let moveTitle = document.getElementById('site-title');
// let openMenu = document.getElementsByClassName('ferme');

button.addEventListener('click', ()=>{
  openMenu.classList.toggle('ouvert');
  moveTitle.classList.toggle('ouvert');
})


// EXEMPLE 3: IMAGES CHANGENT AU CLIC SUR LES FLECHES + INTERVALLES 5s
// SMALL SLIDERS

// Selecteur
let img1 = document.getElementById('smallSlideImage');
// console.log(img1);

// EventListener
document.getElementById('smallSlider2').addEventListener('click', function slider(){

// console.log('toto');

// Function

    let src = document.querySelector('#smallSlideImage').getAttribute('src');
    // console.log(src);
    switch(src){
        case 'img/vehicule2.png':
        img1.setAttribute('src', 'img/vehicule2-2.png');
        break;
        case 'img/vehicule2-2.png':
        img1.setAttribute('src', 'img/vehicule2-3.png');
        break;
        case 'img/vehicule2-3.png':
        img1.setAttribute('src', 'img/vehicule2-4.png');
        break;
        case 'img/vehicule2-4.png':
        img1.setAttribute('src', 'img/vehicule2.png');
        break;

}
// window.setInterval(slider,5000);
});


//--------------------------------------------------------------------

// EXEMPLE 2: IMAGES CHANGENT À INTERVALLE DE 5s ET 
// AU CLIC SUR L'IMAGE

// Selecteur
// let img = document.getElementById('small-slide-image');

// // EventListener
// img.addEventListener('click', function slider(){

// // console.log('toto');

// // Function

//     let src = img.getAttribute('src');
//     switch(src){
//         case 'img/vehicule2.png':
//         img.setAttribute('src', 'img/vehicule2-2.png');
//         break;
//         case 'img/vehicule2-2.png':
//         img.setAttribute('src', 'img/vehicule2-3.png');
//         break;
//         case 'img/vehicule2-3.png':
//         img.setAttribute('src', 'img/vehicule2-4.png');
//         break;
//         case 'img/vehicule2-4.png':
//         img.setAttribute('src', 'img/vehicule2.png');
//         break;

// }
// window.setInterval(slider,5000);
// });

//--------------------------------------------------------------------

// EXEMPLE1 : IMAGES CHANGENT À INTERVALLE DE 5s

// Selecteur
// let img = document.getElementById('small-slide-image');

// // EventListener
// img.addEventListener('click', slider);
// console.log(img.addEventListener('click', slider));

// // Function
// function slider() {
//     let src = img.getAttribute('src');
//     switch(src){
//         case 'img/vehicule2.png':
//         img.setAttribute('src', 'img/vehicule2-2.png');
//         break;
//         case 'img/vehicule2-2.png':
//         img.setAttribute('src', 'img/vehicule2-3.png');
//         break;
//         case 'img/vehicule2-3.png':
//         img.setAttribute('src', 'img/vehicule2-4.png');
//         break;
//         case 'img/vehicule2-4.png':
//         img.setAttribute('src', 'img/vehicule2.png');
//         break;
//     } 
// }
// window.setInterval(slider,5000);

