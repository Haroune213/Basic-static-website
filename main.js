var scrollPosition = window.scrollY;
var logoImg= document.getElementById("logo-img");
var movingText1= document.getElementById("movingtxt1")
var movingText2= document.getElementById("movingtxt2")
var shoesSlider= document.getElementById("shoes-container")
var slider= document.getElementById("forth")
var circle= document.getElementById("circle")
var arrow= document.getElementById("arrow")
var circle2= document.getElementById("circle2")
var arrow2= document.getElementById("arrow2")
var text1pos=0
var text2pos= 0
var pressed= false
let startX;
let x;
let sliderPosition=0;
let clickedPosition;



circle.addEventListener("mouseenter",  ()=>{
    arrow.style.animation = "rotate 0.5s ease-out"
    circle.style.transform="translate3d(4.5vw, 15px, 0) scale(1.3)"
})

circle.addEventListener("mouse",  ()=>{
    arrow.style.animation = "rotate 0.5s ease-out"
    circle.style.transform="translate3d(4.5vw, 15px, 0) scale(1.3)"
})

circle.addEventListener("mouseout",  ()=>{
arrow.style.animation = "reverseRotate 0.5s ease-out"
circle.style.transform="translate3d(4.5vw, 15px, 0) scale(1)"
})

circle.addEventListener("mouseleave",  ()=>{
    arrow.style.animation = "reverseRotate 0.5s ease-out"
    circle.style.transform="translate3d(4.5vw, 15px, 0) scale(1)"}
    )




    circle2.addEventListener("mouseenter",  ()=>{
        arrow2.style.animation = "rotate 0.5s ease-out"
        circle2.style.transform="translate3d(4vw, 3vh,0) scale(1.3)"
    })
    
    circle2.addEventListener("mouse",  ()=>{
        arrow2.style.animation = "rotate 0.5s ease-out"
        circle2.style.transform="translate3d(4vw, 3vh,0) scale(1.3)"
    })
    
    circle2.addEventListener("mouseout",  ()=>{
    arrow2.style.animation = "reverseRotate 0.5s ease-out"
    circle2.style.transform="translate3d(3vw, 3vh,0) scale(1)"
    })
    
    circle2.addEventListener("mouseleave",  ()=>{
        arrow2.style.animation = "reverseRotate 0.5s ease-out"
        circle2.style.transform="translate3d(3vw, 3vh,0) scale(1)"}
        )

function scrollDetection(e){
    if(scrollPosition < window.scrollY){
     logoImg.style.transform= "translateX(-45vw) translateY(-15vh)"
     movingText1.style.transform= "translate(-100vw)"
     movingText2.style.transform= "translate(-100vw)"
    }
     else {
        logoImg.style.transform= "translateX(-45vw) translateY(0vh)";   
        ;   
    }
    
    scrollPosition = window.scrollY;

}

function textMoving(){
    text1pos += -0.25;
    text2pos += -0.25;

    if(text1pos<-119){
        text1pos=116
    }
    if(text2pos<-240){
        text2pos=text1pos
    }

    movingText1.style.transform= `translateX(${text1pos}vw)`
    movingText2.style.transform= `translateX(${text2pos}vw)`
}

slider.addEventListener("mousedown", (e)=>{
    pressed=true
    startX =e.offsetX - shoesSlider.offsetLeft
    const style = window.getComputedStyle(shoesSlider)
    const matrix = new DOMMatrixReadOnly(style.transform)
    clickedPosition=matrix.m41
    console.log(clickedPosition)
})

window.addEventListener('mouseup',()=>{
    pressed=false
})
slider.addEventListener("mousemove",(e)=>{
    if(!pressed) return;
    e.preventDefault()
    x= e.offsetX
    sliderPosition= clickedPosition +x- startX
    shoesSlider.style.transform=`translateX(${(sliderPosition)}px)`
    if(sliderPosition<-1500){
        shoesSlider.style.transform=`translateX(${(-1500)}px)`
    }
    if(sliderPosition>500){
        shoesSlider.style.transform=`translateX(${(500)}px)`
    }
})



setInterval(textMoving,15)
document.addEventListener('scroll', scrollDetection)

