//prezzo km e età

const prezzoPerKm = 0.21
const etaUtente = prompt("Insterisci la tua età")
let kmTotali = prompt("Inserisci i Km") * prezzoPerKm

//sconto

const anni18 = 20 / 100
const anni65 = 40 / 100

//approssimazione

kmTotali = Math.floor(kmTotali)

//nosconto

if(etaUtente < 19){
    let pagamento = kmTotali * anni18

    console.log('Il prezzo da pagare è ' + pagamento )
}   else if(etaUtente > 64){
    let pagamento = kmTotali * anni65

    console.log('Il prezzo da pagare è ' + pagamento)
}   else {
    console.log(kmTotali)
}

