let palavra = "daniel"


function palindromeira(word){
    let transfArray = ''
    for(let p = word.length-1; p >=0; p--){
    transfArray += word[p]
    }
    console.log(transfArray)
    return transfArray
}
palindromeira(palavra)
