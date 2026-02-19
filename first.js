function analyze(a){
    let sum = 0
    let max = a[0]
    let evencount = 0
    let n = a.length-1
      for(let i =0; i <=n;i++){
      sum += Number(a[i])
      if(a[i] % 2 ==0){
        evencount +=1
      }else{}
      if(Number(a[i])>max){
        max = Number(a[i])
      }else{
      }
      }
      
      console.log(`sum : ${sum}`)
      console.log(`max : ${max}`)
      console.log(`evencount : ${evencount}`)
}

analyze([1,8,8,8,6,9,7,0,6,9,6,9,7,96,8])