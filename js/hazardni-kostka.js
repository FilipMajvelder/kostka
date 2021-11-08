const cube = document.getElementById('cube');
const play = document.getElementById('play');
const tlacitko = document.getElementById('tlacitko');

let hod = 0;
let hody = [];
let timer = false;

function animace() {
    hod = Math.ceil(Math.random() * 6);
    cube.src = 'img/kostka' + hod + '.png';
}
tlacitko.addEventListener('click', function(){
    if(!timer) {
        timer = setInterval(animace, 20);
        tlacitko.innerText = 'STOP';

    } else {
        clearInterval(timer);
        timer = false;
        tlacitko.innerText = 'PLAY';
        hody.push(hod);
        statistika();
    }
})

function suma() {
    let sum = 0;
    for (let i = 0; i < hody.length; i++) {
        sum += hody[i];
    }
    return sum;
}
function min() {
    let minimum = 6;
    hody.forEach((value) => {
        if (value < minimum) minimum = value;
    });
    return minimum;
}
function max() {
    let maximum = 1;
    hody.forEach(function(value, index) {
        if (value > maximum) maximum = value;
    });
    return maximum;
}
function statistika() {
    play.innerHTML = `<br>`;
    play.innerHTML = `<p class="alert alert-info">Aktuální hod: <strong>${hod}</strong></p>`;
    play.innerHTML += `<p class="alert alert-info">Všechny hody: <strong>${hody}</strong></p>`;
    play.innerHTML += `<p class="alert alert-info">Součet hodů: <strong>${suma()}</strong></p>`;
    play.innerHTML += `<p class="alert alert-info">Průměr hodů: <strong>${(suma() / hody.length).toFixed(2)}</strong></p>`;
    play.innerHTML += `<p class="alert alert-info">Minimální hod: <strong>${min()}</strong></p>`;
    play.innerHTML += `<p class="alert alert-info">Maximální hod: <strong>${max()}</strong></p>`;
}
