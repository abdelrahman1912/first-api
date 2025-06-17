(async function getapi (){
 var items= await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
 var result=await items.json();
 var rec=result.recipes;
 var txt=" ";
 for(var i=0;i<rec.length;i++){

  var cartoona=
              `
              <div class="col-md-4 text-center">
              <img src="${rec[i].image_url}" class="img-fluid" style="width: 300px; height: 300px;">
              <h4>${rec[i].title}</h4>
              <h5>${rec[i].publisher}</h5>
              </div>

              `
              txt=txt+cartoona; 
             }
document.querySelector('.test').innerHTML=txt;
  })();

  