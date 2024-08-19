var iFrame = document.getElementById("iFrame")
var borderParent = document.getElementById("border")
var closeFrame = document.getElementById("closeFrame")
var colorGround =document.getElementById("blue")
var colorGround1 =document.getElementById("black")
var colorGround2 =document.getElementById("aqua")
var colorGround3 =document.getElementById("teal")
var colorGround4 =document.getElementById("green")
var colorGround5 =document.getElementById("red")
var colorBack = document.getElementsByClassName("colorBack")


iFrame.addEventListener("click" , openBorder );    
    function openBorder () {      
        borderParent.style.width = "200px"
        borderParent.style.boxShadow = "5px 5px 5px 5px #606060";
        iFrame.style.display = "none"
        closeFrame.style.display = "flex"
    }


    closeFrame.addEventListener("click" , closeBorder )
        function closeBorder() {
            borderParent.style.width = "0"
            borderParent.style.boxShadow = "0";
            iFrame.style.display = "flex"
            closeFrame.style.display = "none"
        }


colorGround.addEventListener("click" , function(){
    for (var i = 0; i < colorBack.length; i++) {
        colorBack[i].style.backgroundColor = "blue"
    }
})

colorGround1.addEventListener("click" , function(){
    for (var i = 0; i < colorBack.length; i++) {
        colorBack[i].style.backgroundColor = "black"
    }
})

colorGround2.addEventListener("click" , function(){
    for (var i = 0; i < colorBack.length; i++) {
        colorBack[i].style.backgroundColor = "aqua"
    }
})

colorGround3.addEventListener("click" , function(){
    for (var i = 0; i < colorBack.length; i++) {
        colorBack[i].style.backgroundColor = "teal"
    }
})

colorGround4.addEventListener("click" , function(){
    for (var i = 0; i < colorBack.length; i++) {
        colorBack[i].style.backgroundColor = "green"
    }
})

colorGround5.addEventListener("click" , function(){
    for (var i = 0; i < colorBack.length; i++) {
        colorBack[i].style.backgroundColor = "red"
    }
})

let headerBar =document.getElementById("headerBar")
window.onscroll = function (){
    if (scrollY >= 200) {
        headerBar.classList.add("start_2")
    }
    else {
        headerBar.classList.remove("start_2")
    }
}

