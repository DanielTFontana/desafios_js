let nums = [10,5,7,8,9,6,33,77,41,8,25,8,25,34,6,6,8]
function findMediana (x) {

  let mediaPar = 0

  let medianaImpar = 0

  x.sort((a,b) => a-b)

  for(let i = 0; i < x.length; i++){

    if(x.length%2 ==0){

      mediaPar = (x[x.length/2] + x[x.length/2 + 1])/2

    }else{

      medianaImpar = x[x.length/2]

    }

  }

  if(x.length%2 == 0){

    console.log(mediaPar)

  }else{

    console.log(medianaImpar)

  }

}
function findMedia (x){
    let total = 0
    for(let i = 0 ; i < x.length; i++){
        total += x[i]
    }
   let media = total/x.length
}

function findModa (x){

}
console.log(findMediana(nums))