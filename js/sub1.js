const circle = document.querySelector(".circle");
console.log(circle);
document.addEventListener("mousemove",e =>{
  const mouseX = e.pageX;
  const mouseY = e.pageY;
  circle.style.left = mouseX + 'px';
  circle.style.top = mouseY + 'px';
});


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
    }else{
      skill.style.opacity = "0"
      tool.style.opacity = "1";
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

//content1 사진 흔들리기
const content1 = document.querySelector(".content1_wrapbg");
console.log(content1);
let content1bg = document.querySelector(".content1_bg");
console.log(content1bg);

content1.addEventListener("mousemove",e=>{

})

content1.addEventListener("mouseover",e=>{
  content1bg.style.backgroundSize = "103%";
})
content1.addEventListener("mouseout",e=>{
  content1bg.style.backgroundSize = "100%";
  content1bg.style.backgroundPosition = "50% 50%"
})

const strong = document.querySelectorAll(".content2_right>strong");
console.log(strong);
const b = document.querySelectorAll(".content2_right>b");
console.log(b);
const content2bg = document.querySelector(".content2_bg");

strong.forEach((el,i) =>{
  el.addEventListener("mouseover" , e=>{
    content2bg.style.backgroundImage = `url('images/bg2_2.png')`
  })
  el.addEventListener("mouseleave", e=>{
    content2bg.style.backgroundImage = `url('images/bg2_1.jpg')`
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




function activation(index,list){
  for(let el of list){
    el.classList.remove("on");
  }
  list[index].classList.add("on");
}

