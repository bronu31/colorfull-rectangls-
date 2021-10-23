var sq=50, status=1,count=0;
var  a, main, l,u,list,del;
function pageLoad() {
    main = document.getElementById("rectanglearea");
   console.log(main);
  document.getElementById("start").onclick = getCountdown; 
  document.getElementById("stop").onclick = stop; 
  for(;count!=sq;count++){
      l=Math.round(Math.random()*401);
      r=Math.round(Math.random()*601);
      a = document.createElement('div');
     a.className = 'rectangle';
     a.style.top = l+"px";
     a.style.left =r+"px";
     a.style.backgroundColor='#' + Math.floor(Math.random()*16777215).toString(16);
     a.onclick=delet;
     a.onmouseover = bord;
     a.onmouseout=notbord;
      main.appendChild(a);
  }
}
function bord(){
    this.style.borderColor='blue';
}
function notbord(){
    this.style.borderColor='black';
}
function delet(){
      this.parentNode.removeChild(this); 
}
window.onload = pageLoad;
function getCountdown(){
    if(status==1){
    time = setInterval(timer,1000);
    status=-1;
}
}
function stop(){
    clearInterval(time);
    status=1;
}
function timer(){
    var b;
    console.log(this.onmouseover);
    list = main.childNodes; 
    count=0;
    for(;count!=list.length;count++){
        list[count].style.backgroundColor='#' + Math.floor(Math.random()*16777215).toString(16);
  
    }
    
    }