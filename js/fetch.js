const { createElement } = require("react");

const btnCatagory=()=>{
      
  fetch(' https://openapi.programming-hero.com/api/phero-tube/categories')
  .then((res=>res.json()))
  .then(data=>{
         
         displayBtn(data.categories)
  })
}

btnCatagory();

   function displayBtn(catagorys){
      const btn=document.getElementById('btn-category');
       for(btns of catagorys){

            console.log(btns)

            const btnDiv =document.createElement('div');
            btnDiv.innerHTML=`<button class="btn btn-accent">${btns.category}</button>`
            btn.append(btnDiv);
             
       }
   }


    function vedioPart(){
         
            fetch(' https://openapi.programming-hero.com/api/phero-tube/videos')
            .then(res=>res.json())
            .then(data=>{
                   displayVideo(data.videos)
            })
    }
 vedioPart();
 
 function displayVideo(video){
          const videoSection=document.getElementById('video_section');
          for(conten of video){
              console.log(conten)
              const videoCard=createElement('div');
              videoCard.innerHTML=`  <div class="card bg-base-100 w-96 shadow-sm">
                                      <figure>
                                        <img
                                          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                          alt="Shoes" />
                                      </figure>
                                      <div class="card-body">
                                        <h2 class="card-title">Card Title</h2>
                                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                        <div class="card-actions justify-end">
                                          <button class="btn btn-primary">Buy Now</button>
                                        </div>
                                      </div>
                             </div>`

                  videoSection.append(videoCard);           
          }
 }