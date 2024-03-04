//prezzo km e età

const prezzoPerKm = 0.21
const etaUtente = prompt("Insterisci la tua età")
let kmTotali = prompt("Inserisci i Km") * prezzoPerKm

//sconto

const anni18 = kmTotali * 20 / 100
const anni65 = kmTotali * 40/ 100

//approssimazione

kmTotali = Math.floor(kmTotali)

//nosconto

if(etaUtente < 19){
    console.log('Il prezzo da pagare è ' + anni18 )
}   else if(etaUtente > 64){
    console.log('Il prezzo da pagare è ' + anni65)
}   else {
    console.log(kmTotali)
}

