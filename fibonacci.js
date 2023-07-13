function fibo(n){
    let seq =[]
    for(let i = 1; i < 100; i++){
        seq.push(n)
        seq[1] = n + n
        seq[1+i] = seq[i-1] + seq[i]
        
    }
    console.log(seq)
}
    
fibo(1)
//eu fibonateio qualquer número