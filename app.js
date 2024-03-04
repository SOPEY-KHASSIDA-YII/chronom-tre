let chrono = document.getElementById('chrono');
let resetBtn = document.getElementById('reset');
let stopBtn = document.getElementById('stop');
let startBtn = document.getElementById('start');
let addBtn = document.getElementById('add');

startBtn.style.backgroundColor = 'red';
startBtn.style.color = 'white';

let heures = 0, minutes = 0, secondes = 0, ms = 0;


let timeout;
let estArreter = true;


const demarrer = () => {
    timeout = setInterval(defilerTemps, 10);
    if (estArreter) {
        estArreter = false;
        defilerTemps();
    }

};

const arreter = () => {
    if (!estArreter) {
        estArreter = true;
        clearInterval(timeout);
        document.getElementById('start').innerHTML = 'Continuer';

    }
};

const defilerTemps = () => {
    if (estArreter) return;
    ms = parseInt(ms);
    secondes = parseInt(secondes);
    minutes = parseInt(minutes);
    heures = parseInt(heures);

    ms++;

    if (ms == 99) {
        secondes++;
        ms = 0;
    }
    if (secondes == 60) {
        minutes++;
        secondes = 0;
    }
    if (minutes == 60) {
        heures++;
        minutes++;

    }
    if (ms < 10) {
        ms = '0' + ms;
    }
    if (secondes < 10) {
        secondes = '0' + secondes;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (heures < 10) {
        heures = '0' + heures;
    }

    chrono.textContent = `${heures}:${minutes}:${secondes}:${ms}`;

};

const add = () => {
    let ajouter = chrono.textContent;
    document.getElementById('addd').innerHTML += ajouter + "<br/>";
};

const reset = () => {
    chrono.textContent = "00:00:00:00";
    estArreter = true;
    heures = 0;
    minutes = 0;
    secondes = 0;
    ms = 0;
    clearInterval(timeout);
    document.getElementById('addd').innerHTML = chrono.textContent;
    document.getElementById('start').innerHTML = 'Démarrer';
};

startBtn.addEventListener("click", demarrer);
stopBtn.addEventListener("click", arreter);
resetBtn.addEventListener("click", reset);
addBtn.addEventListener("click", add);

