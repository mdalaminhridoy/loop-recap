//  map one arrry return kore 

// const numbers=[12,44,65,90,89];
// const result=numbers.map(number=>{
//       return number-2;
// })
// console.log(result);
// // filter method //
// const nums=[44,34,13,90,9,3,45,44];
// const filterResult=nums.filter(num=>{
    
//     return num%2===0;
// })
// console.log('even number:',filterResult)

// const names=[
//       {name:'Alamin', age:45},
//       { name:'maria', age:23},
//       { name:'siam', age:30},
//       {name:'Hridoy', age:18}
// ]

//  const findResult=names.filter(nam=>{
//        if(nam.age<=30 && nam.name==='Hridoy'){
//             return nam;
//        }
//  })
//  console.log(findResult)

const Numbers=[12,54,22,66,55,44,33,33,90];
 
const FinalREsult=Numbers.map(number=> number+10)
    
 console.log('odd number add to sum:=',FinalREsult);
 const numbers = [2, 3, 4, 5];
 const result=numbers.map(num=> num*2)
 console.log(result);


 const names = ["Alamin", "Rahim", "Karim"];
  const HelloName=names.map(Hello=> 'Hello'+Hello)
  console.log(HelloName);

  const numberEven = [3, 8, 11, 14, 17, 20];
  const EvenNumber=numberEven.filter(even=> even%2==0)
  console.log( 'even number', EvenNumber);

  const numberBig = [20, 55, 40, 75, 90, 10];
  const BigNumber=numberBig.filter(big=> big>50);
  console.log('the big number:',BigNumber)


  const users = [{ name: "Alamin", age: 22 }, { name: "Rahim", age: 16 }, { name: "Karim", age: 19 }];

  const useResult=users.filter(useSmall=> useSmall.age>18);
  console.log('the 18 year old users=',useResult)

  const fruits = ["Apple", "Mango", "Banana", "Orange"];
  fruits.forEach(fruit=>{
       console.log(fruit)
  })
  const userss = [{ id: 1, name: "Alamin" }, { id: 2, name: "Rahim" }, { id: 3, name: "Karim" }, { id: 4, name: "Hasan" }];

  const finds=userss.find(use=> use.id==3);
  console.log('id3 user',finds)