//prezzo km e età

const prezzoPerKm = 0.21
const etaUtente = prompt("Insterisci la tua età")
let kmTotali = prompt("Inserisci i Km") * prezzoPerKm

//sconto

const anni18 = 20 / 100
const anni65 = kmTotali * 40/ 100

//approssimazione

kmTotali = Math.floor(kmTotali)

//nosconto

if(etaUtente < 19){
    kmTotali * anni18

    console.log('Il prezzo da pagare è ' + kmTotali )
}   else if(etaUtente > 64){
    kmTotali * anni65

    console.log('Il prezzo da pagare è ' + kmTotali)
}   else {
    console.log(kmTotali)
}

