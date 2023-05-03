document.addEventListener('DOMContentLoaded',function(event){

  var dataText = [ "&lt;input type='HEOSOL PORTFOLIO' / &gt;" ];
  
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
     document.querySelector(".main>p").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     });
    }
  }
  StartTextAnimation(0);
});

const main = document.querySelector(".main")
console.log(main);
const btn = document.querySelector("button");
console.log(btn);
const loading = document.querySelector(".loading")
btn.addEventListener("click",e=>{
  e.preventDefault();
  main.style.opacity = "0";
  e.currentTarget.style.opacity = "0";
  loading.style.opacity = "1";
});


$(document).ready(function() {
  
  var counter = 0;
  var c = 0;
  var i = setInterval(function(){
      $(".loading .counter p").html(c + "%");
      $(".loading .counter hr").css("width", c + "%");
    counter++;
    c++;
      
    if(counter == 101) {
        clearInterval(i);
    }
  }, 50);
});