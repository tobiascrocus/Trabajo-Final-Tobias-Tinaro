/* ----------Codigo juego---------- */

let imagen1 = document.querySelector('#imagen1');
let imagen2 = document.querySelector('#imagen2');
let imagen3 = document.querySelector('#imagen3');

let caja1 = document.querySelector('#caja1');
let caja2 = document.querySelector('#caja2');
let caja3 = document.querySelector('#caja3');

caja1.addEventListener('dragover', e => {
    e.preventDefault();
});

caja1.addEventListener('drop', e => {
    caja1.appendChild(imagen2);
});

caja2.addEventListener('dragover', e => {
    e.preventDefault();
});

caja2.addEventListener('drop', e => {
    caja2.appendChild(imagen1);
});

caja3.addEventListener('dragover', e => {
    e.preventDefault();
});

caja3.addEventListener('drop', e => {
    caja3.appendChild(imagen3);
});

function reiniciar() {
    window.location.reload();
}