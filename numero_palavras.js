let texto = "eu você e o zubumafu. vamos todos descobrir, um novo mundo vamos curtir, novos animais vamos conhecer. eu você e o zubumafu."

function findWord (texto, word){
    let palavra = '' 
    let contador = 0
    let lista = ''

    for(let i = 0; i < texto.length; i++){

    if(texto[i] === ' ' || texto[i] === "." || texto[i] === ','){
        if(palavra === word){
            contador++
            
        }
        palavra = ''
        
    }
    else{
        palavra += texto[i]
    }
    }
    console.log(`a palavra ${word} apareceu ${contador} vezes`)
      
}
findWord(texto, "zubumafu")