//document.onmousemove = function () {
//    document.getElementsByTagName("body")[0].insertAdjacentHTML('beforeEnd', '<img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/cat-48.png" id="cat">');
//   var cat = document.getElementById("cat"); 
//    
//    document.onmousemove = function(event) {
//    cat.style.position = "fixed";
//    cat.style.left = event.clientX +20+ "px";
//    cat.style.top = event.clientY +20+ "px";
//}
//}

window.onload=function(){

for (var i=0; i<9; i++) {
    document.getElementById('game').innerHTML+='<div class="block"></div>';
}
   var hod=0;
    document.getElementById('game').onclick=function(event){
       console.log(event);
       if(event.target.className == 'block'){
           if(hod%2==0){
             event.target.innerHTML='x';  
           }
          else{
              event.target.innerHTML='0';  
          } 
           hod++;
           checkWinner();
       }
   } 
  function checkWinner()  {
      var allblock = document.getElementsByClassName("block");
     // console.log(allblock);
      if (allblock[0].innerHTML=='x' && allblock[1].innerHTML=='x' && allblock[2].innerHTML=='x')alert("Win X!!!!")
      if (allblock[3].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[5].innerHTML=='x')alert("Win X!!!!")
      if (allblock[6].innerHTML=='x' && allblock[7].innerHTML=='x' && allblock[8].innerHTML=='x')alert("Win X!!!!")
      if (allblock[0].innerHTML=='x' && allblock[3].innerHTML=='x' && allblock[6].innerHTML=='x')alert("Win X!!!!")
      if (allblock[1].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[7].innerHTML=='x')alert("Win X!!!!")
      if (allblock[2].innerHTML=='x' && allblock[5].innerHTML=='x' && allblock[8].innerHTML=='x')alert("Win X!!!!")
      if (allblock[0].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[8].innerHTML=='x')alert("Win X!!!!")
      if (allblock[2].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[6].innerHTML=='x')alert("Win X!!!!")
      
      //noliki
      if (allblock[0].innerHTML=='0' && allblock[1].innerHTML=='0' && allblock[2].innerHTML=='0')alert("Win 0!!!!")

      if (allblock[3].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[5].innerHTML=='0')alert("Win 0!!!!")
          
      if (allblock[6].innerHTML=='0' && allblock[7].innerHTML=='0' && allblock[8].innerHTML=='0')alert("Win 0!!!!")
      
      if (allblock[0].innerHTML=='0' && allblock[3].innerHTML=='0' && allblock[5].innerHTML=='0')alert("Win 0!!!!")
      if (allblock[1].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[7].innerHTML=='0')alert("Win 0!!!!")
      if (allblock[2].innerHTML=='0' && allblock[5].innerHTML=='0' && allblock[8].innerHTML=='0')alert("Win 0!!!!")
      if (allblock[0].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[8].innerHTML=='0')alert("Win 0!!!!")
      if (allblock[2].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[6].innerHTML=='0')alert("Win 0!!!!")
      
  }
    
}


