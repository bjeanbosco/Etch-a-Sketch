
const container = document.getElementById("container");
let grid=document.querySelector('.grid-item')
function makeRows(rows) { 
  container.style.setProperty('--grid-rows', rows);
container.style.setProperty('--grid-cols', rows);
  //let Datas=container.querySelectorAll('div')
 // Datas.forEach(item=>item.remove())
let Size=rows*rows

  for (i = 0; i < Size; i++) {
let Data = document.createElement("div");
   
    container.appendChild(Data)
    //insertAdjacentElement('beforeend',Data)
    Data.addEventListener('mouseover',Color)
  }

};




function SizeDetermine(number){
  number=prompt('enter number to sketch')
  if(number<1||number<=100){
    makeRows(number)
  }
 else{
  alert('number must be beween 2 and 100')
 }
 console.log(1);
}


  

function Color(){

    this.style.backgroundColor=`rgb(${Math.random()*225},${Math.random()*225},${Math.random()*225})`

   
}
