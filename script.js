// CARNE - 150G P/ PESSOA   + DE 6h 220G 
// LINGUIÇA - 130G P/ PESSOA  + DE 6H 200G 
// FRANGO - 120G P/ PESSOA  + DE 6H 200G
// PAO DE ALHO - 100G P/ PESSOA  + DE 6H 250G
// CERVEJA - 1500ML P/ PESSOA  + DE 6H 3000ML
// REFRI/AGUA - 1000ML P/ PESSOA  + DE 6H 2000ML
// CRIANÇA VALEM POR 0,5 


let inputAdults = document.getElementById("adults");
let inputKids = document.getElementById("kids");
let inputDuration = document.getElementById("duration");

let result = document.getElementById("results");

function calc(){
    let adults = inputAdults.value;
    let kids = inputKids.value;
    let duration = inputDuration.value;

    let totalCarne = carnePP(duration) * adults + (carnePP(duration) / 2 * kids);
    let totalLinguica = linguicaPP(duration) * adults + (linguicaPP(duration) / 2 * kids);
    let totalFrango = frangoPP(duration) * adults + (frangoPP(duration) / 2 * kids);
    let totalPao = paoAlhoPP(duration) * adults + (paoAlhoPP(duration) / 2 * kids);
    let totalBeer = beerPP(duration) * adults;
    let totalSodaWater = sodaWaterPP(duration) * adults + (sodaWaterPP(duration) / 2 * kids);

    console.log(totalCarne, totalLinguica, totalFrango, totalPao, totalBeer, totalSodaWater);

    results.innerHTML = `<p>- ${totalCarne}g de Carne.</p>`
    results.innerHTML += `<p>- ${totalLinguica}g de Linguiça.</p>`
    results.innerHTML += `<p>- ${totalFrango}g de Frango.</p>`
    results.innerHTML += `<p>- ${Math.ceil(totalPao / 50)} Pães de alho.</p>`
    results.innerHTML += `<p>- ${Math.ceil(totalBeer / 473)} Latões de Cerveja.</p>`
    results.innerHTML += `<p>- ${Math.ceil(totalSodaWater / 2000)}L de Refrigerante/Água.</p>`
}

function carnePP(duration){
    if(duration >= 6){
        return 220;
    }
    else{
        return 150;
    }
}

function linguicaPP(duration){
    if(duration >= 6){
        return 200;
    }
    else{
        return 130;
    }
}

function frangoPP(duration){
    if(duration >= 6){
        return 200;
    }
    else{
        return 120;
    }
}

function paoAlhoPP(duration){
    if(duration >= 6){
        return 300;
    }
    else{
        return 200;
    }
}

function beerPP(duration){
    if(duration >= 6){
        return 5000;
    }
    else{
        return 3000;
    }
}

function sodaWaterPP(duration){
    if(duration >= 6){
        return 200;
    }
    else{
        return 1000;
    }
}