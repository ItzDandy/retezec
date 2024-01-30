function reverze() {
    let rv = document.getElementById("řetezec").value;
    const reverze = rv.split("").reverse().join("");
    document.getElementById("výsledek").innerText = reverze;
}

function rozdělení(){
    let rozdel = document.getElementById("řetezec").value;
    const rozdeleni = rozdel.split("");
    document.getElementById("výsledek").innerText = rozdeleni
}

function výskyt() {
    let pismo = document.getElementById("řetezec").value;
    const pocet = (pismo.match(/[a-zA-Z]/g)).length;
    document.getElementById("výsledek").innerText = pocet
}


function změna() {
    let slovo = document.getElementById("řetezec").value;
    let nahrazeno = prompt('Nahradit:');
    let nahrazujici = prompt('Nahrazující:');
    let zmena = slovo.replace(nahrazeno, nahrazujici);
    document.getElementById("výsledek").innerText = zmena;
    
}

function hledat() {
    let pismo = document.getElementById("řetezec").value;
    let najit = prompt("hledani");
    let pozice = [];
    let index = pismo.indexOf(najit);
    while (index !== -1) {
        pozice.push(index);
        index = pismo.indexOf(najit, index + 1);
    }
    
    if (pozice.length > 0) {
        document.getElementById("výsledek").innerText = pozice;
    } else {
        document.getElementById("výsledek").innerText = String("Hledaný text není v řetězci");
    }
}
