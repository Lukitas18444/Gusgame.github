


const correcta = document.querySelectorAll(".correcta");
const incorrecta = document.querySelectorAll(".incorrecta");
let coin = new Audio("Assets/coin.mp3");
let douh = new Audio("Assets/douh.mp3");

correcta.forEach( bien => {
    bien.addEventListener('click', function handleClick(event){
        console.log('bien clicked', event);
        coin.play();
        alertBien();
        bien.setAttribute('style', 'background-color: green;')
    })
})

incorrecta.forEach( mal => {
    mal.addEventListener('click', function handleClick(event){
        console.log('mal clicked', event);
        douh.play();
        alertMal();
        mal.setAttribute('style', 'background-color: red;')
    })
})

let sound = new Audio("Assets/Leo.mp3");

btnAudio.addEventListener("click", () => {
    sound.play();
})
btnSilence.addEventListener("click", () => {
    sound.pause();
})

function alertBien(){
    swal("Excelente!", "Gustavo está feliz de que avinistaste! Elige a quien darle un shot.", "success");
}
function alertMal(){
    swal("Mal!", "Tomas un shot y pidele unas disculpas a Gus.", "error");
}
