/* ----------Codigo video---------- */

let video = document.querySelector('video');
let botonPlay = document.getElementById("botonPlay");
let botonPause = document.getElementById("botonPause");

botonPlay.addEventListener('click',()=>{
    video.play();
});

botonPause.addEventListener('click',()=>{
    video.pause();
});

/* ----------Codigo juego---------- */