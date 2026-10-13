
function sum(num1,num2){
        const result=num1+num2;
        return result;
     
}

 const total=sum(23,40);
//  console.log(total)

  const arrow=(a,b)=>{
       const mulitiply=a*b*4;
       return mulitiply;
  }
const num=['malik','junaed','kairul'];
const num3=[39,9,90 ,...num];
// console.log(num3)

const students={
        id:1,
        nams:'Hridoy',
        Roll:778447,
         

}

const{id,nams,Roll}=students;
// console.log(nams);

  let a=50;
 let b=40;
 [a,b]=[b,a]

//   console.log('a=',a, 'b=',b)

//    map methods use 
  const digits=[34,33,2,59,90,88,33,80];

     const maps=digits.filter(digit=>{
         return digit;
     })
     
  
   console.log(maps)
const studentss=['call',]


   const parsons=[
                     {id:1, phone:'Realme', color:'black',price:2890},
                     {id:2, phone:'Redmi', color:'black',price:30222},
                     {id:3, phone:'Samsong', color:'black',price:3000},
                     {id:4, phone:'poco', color:'black',price:2000},
                     {id:5, phone:'Realme', color:'black',price:1000},
   ]

   const filters=parsons.filter(parson=>{
              
          if(parson.phone==='Redmi'){

             return parson;
          }
   })
console.log(filters)

  const mapp=parsons.map(p=>{
          if(p.price==2000){
             return p;
          }
  })

  console.log(mapp)


  