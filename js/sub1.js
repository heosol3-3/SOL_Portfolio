// main.js
// 로딩페이지
function imagesProgress(){
  let container = document.querySelector("#progress");//div
  let progressBar = document.querySelector(".progress-bar"); //span
  let progressText = document.querySelector(".progress-text"); //span
  let imgLoad = imagesLoaded('body'); 
  let imgTotal = imgLoad.images.length; //body 전체 이미지 수를 저장
  let imgLoaded = 0;//이미지 로딩한 숫자
  let current = 0; //text에 들어갈 숫자
  let progressTimer = setInterval(updateProgress,1000/60);
  
  imgLoad.on("progress",function(){
    imgLoaded++;
  })
  
  function updateProgress(){
    //bar width:0%~100%
    //text 0~100%
    let target = (imgLoaded / imgTotal) * 100;
    current += (target - current) * 0.1;
  
    progressBar.style.width = current + '%';
    progressText.innerText = Math.floor(current) + '%';
  
    if(current>=100){
      clearInterval(progressTimer);
      container.classList.add("progress-complete");
      container.classList.add("on");
    }
    if(current>99.9){
      current=100;
    }
  }
  
  }
  
  imagesProgress();



const contents = document.querySelectorAll("#container>div");
console.log(contents);
const headerWrap = document.querySelector(".header_wrap");
console.log(headerWrap);
const lis = document.querySelectorAll(".gnb li");
console.log(lis);

let devHeight;
devHeight = window.innerHeight;
console.log(devHeight);

for(let i=0; i<contents.length; i++){
  contents[i].style.height = `${devHeight}px`
}


lis.forEach((li,i)=>{
  li.addEventListener("click",e=>{
    e.preventDefault();
    activation(i,lis);
    window.scroll({
      top: (i*devHeight),
      left:0,
      behavior:"smooth"
    });
  });

  window.addEventListener("scroll",e=>{
    let scrolls = document.querySelector('html').scrollTop;
    if(scrolls>=(i*devHeight) && scrolls<(i+1)*devHeight){
      activation(i,lis);
    }
    if(scrolls<=180){
      headerWrap.classList.remove("on");
    }else{
      headerWrap.classList.add("on");
    }
  })

  window.addEventListener('resize',()=>{
    devHeight = window.innerHeight;
  });
});

const con3Btns = document.querySelectorAll(".content3_button>a");
console.log(con3Btns);
const skill = document.querySelector(".skill");
console.log(skill);
const tool = document.querySelector(".tool");
console.log(tool);

con3Btns.forEach((con3Btn,i) => {
  con3Btn.addEventListener("click", e=>{
    e.preventDefault();
    activation(i,con3Btns);
    if(con3Btns[0].className == "on"){
      tool.style.opacity = "0";
      skill.style.opacity = "1";
      tool.style.zIndex = "0";
      skill.style.zIndex = "1";
    }else{
      skill.style.opacity = "0"
      tool.style.opacity = "1";
      tool.style.zIndex = "1";
      skill.style.zIndex = "0";
    }
  });
})

const topBt = document.querySelector(".top>a");
console.log(topBt);
topBt.addEventListener("click",e=>{
  e.preventDefault();
  window.scroll({
    top:0,
    left:0,
    behavior:"smooth"
  });
});

//스크롤
for(let i=0; i<contents.length;i++){
  contents[i].addEventListener('wheel', e=> {
    if(e.deltaY < 0){
      let prev = e.currentTarget.previousElementSibling.offsetTop;
      window.scroll({
        top:prev,
        left:0,
        behavior:'smooth'
      });
    }else if(e.deltaY > 0){
      let next = e.currentTarget.nextElementSibling.offsetTop;
      window.scroll({
        top:next,
        left:0,
        behavior:'smooth'
      });
    }
  })
}

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
console.log(prev);
console.log(next);


//4번째 화살표
window.addEventListener('scroll', e=>{
  let scrolls = document.querySelector('html').scrollTop;
  if(scrolls>=(devHeight*3)-3 && scrolls<(devHeight*4)-3){
    prev.classList.add("on");
    next.classList.add("on");
  }else{
    prev.classList.remove("on");
    next.classList.remove("on");
  }
})



devWidth = window.innerWidth;
console.log(devWidth);
const portlis = document.querySelectorAll(".portfolio>li");
console.log(portlis);
// for(let i=0; i<portlis.length; i++){
//   portlis[i].style.height = `${849}px`
//   portlis[i].style.width = `73.95vw`
// }

const port = document.querySelector(".portfolio");
console.log(port);
// next
next.addEventListener('click', e=>{
  e.preventDefault();
  let lastIndex = port.children.length-1 //마지막 배너

});
// prev
prev.addEventListener('click', e=>{
  e.preventDefault();

});



//content1 사진 확대
const content1 = document.querySelector(".content1_wrapbg");
console.log(content1);
let content1bg = document.querySelector(".content1_bg");
console.log(content1bg);


content1.addEventListener("mouseover",e=>{
  content1bg.style.backgroundSize = "105%";
})
content1.addEventListener("mouseout",e=>{
  content1bg.style.backgroundSize = "100%";
  content1bg.style.backgroundPosition = "50% 70%"
})

const strong = document.querySelectorAll(".content2_right>strong");
console.log(strong);
const b = document.querySelectorAll(".content2_right>b");
console.log(b);
const content2bg = document.querySelector(".content2_bg");

strong.forEach((el,i) =>{
  el.addEventListener("mouseover" , e=>{
    content2bg.style.backgroundImage = `url('images/bg2_2.png')`
    content2bg.style.backgroundSize = `300%`
  })
  el.addEventListener("mouseleave", e=>{
    content2bg.style.backgroundImage = `url('images/bg2_1.jpg')`
    content2bg.style.backgroundSize = `200%`
  })
})
b.forEach((el,i) => {
  el.addEventListener("mouseover" , e=>{
    content2bg.style.backgroundImage = `url('images/bg2_3.jpg')`
  })
  el.addEventListener("mouseleave", e=>{
    content2bg.style.backgroundImage = `url('images/bg2_1.jpg')`
  })
})

//클릭하면 복사되게 하기
const mail = document.querySelector(".content5_left>p>span");
console.log(mail);
mail.addEventListener("click", e=>{
  e.preventDefault();
  navigator.clipboard.writeText("diarysamz3@gmail.com").then(() =>{
    alert("COPY OK!");
  })
})



function activation(index,list){
  for(let el of list){
    el.classList.remove("on");
  }
  list[index].classList.add("on");
}


