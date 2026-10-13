// for loop 
// 1+2+3+...99

const numbers=[12,34,10,3,9,90];
 let sum=0;
 for(i=0; i<numbers.length; i++){
     sum=numbers[i]+sum;
   
 }
//    console.log(sum)

//    while loop 

  i=0;
  let sum1=0;
  while(i<numbers.length){
     sum1=sum1+numbers[i]
     i++
  }
//   console.log('the sum of while loop=', sum1)
// for of looping exicute

const Mobiles=['iPhone','Realme', 'IQPhone', 'Sumsong', 'Redmi'];

// how much item //
  console.log( 'total Modiles Item=',  Mobiles.length)

for(mobile of Mobiles){
    //  console.log(mobile);
}

