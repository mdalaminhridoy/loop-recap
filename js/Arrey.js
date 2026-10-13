const number=[12,34,78,90,12];
 let sum=0;
 for(i=0; i<number.length; i++){
       sum=sum+number[i]
 }
 console.log('the sum of =',sum);

 let max=number[0];
 for(i=0; i<number.length; i++){
     
    if(number[i]>max){
        max=number[i]
    }
 }
 console.log('the max number of:',max)

//  minimum number nirnoy kora..../

 let minimumNumber=number[0];
 for(i=0; i<number.length; i++){
     if(number[i]<minimumNumber){
          minimumNumber=number[i]
          console.log(minimumNumber)
     }
 }
 console.log( 'minimum number of',minimumNumber);
 
 const names=['alamin', 'kairul', 'topale'];


//   last a data add =push
  names.push('rafi','joni');
 console.log(names)
//  last a data remove =pop
  names.pop()
  console.log(names)

//   start teke data  remove =shift use kori ;
  names.shift()
  console.log(names)

//   start a data add =unshift method use kori
  names.unshift('sihab');
  console.log(names)

//   slice ar maddome arrey teke data copy kora ana jay . index use kore= slice( start, end ) //

  const slices=[23,33,22,55,22,66];
   console.log('slice copy number',slices.slice(1,4));

//    splice method ar moddomoe amra data remove and add korte pari . 
// //syntax= start = index number ,
// koyta remove korbe =index number 

    const fuirts=['mango','banana', 'apple','orange'];
     fuirts.splice(1,2)
    //  console.log(fuirts)
  fuirts.splice(1,3,'cabrige')   ;
  console.log(fuirts)