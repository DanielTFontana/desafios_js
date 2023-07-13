
function emHoras(x){
    let horas = Math.round(x/60)
    let min = x%60
    let sec = min%60
    
    console.log(`horas ${horas} min ${min} sec ${sec}`)
}
emHoras(23232)