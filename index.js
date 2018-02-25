
document.getElementById("bg1").addEventListener("click", function(){
    document.getElementById("main").style.display="block";
    
    document.getElementById("title").textContent = "Head Gear";
    document.getElementById("ch1").style.backgroundImage = "url(gears/h1.png)";
    document.getElementById("ch2").style.backgroundImage = "url(gears/h2.png)";
    document.getElementById("ch3").style.backgroundImage = "url(gears/h3.png)";
});



document.getElementById("bg2").addEventListener("click", function(){
   
    document.getElementById("title").textContent = "Body Gear";
    document.getElementById("main").style.display="block";
     document.getElementById("ch1").style.backgroundImage = "url(gears/b1.png)";
    document.getElementById("ch2").style.backgroundImage = "url(gears/b2.png)";
    document.getElementById("ch3").style.backgroundImage = "url(gears/b3.png)";
});

document.getElementById("bg3").addEventListener("click", function(){
    
    document.getElementById("title").textContent = "Leg Gear";
    document.getElementById("main").style.display="block";
    
    document.getElementById("ch1").style.backgroundImage = "url(gears/l1.png)";
    document.getElementById("ch2").style.backgroundImage = "url(gears/l2.png)";
    document.getElementById("ch3").style.backgroundImage = "url(gears/l3.png)";
});

document.getElementById("bg4").addEventListener("click", function(){
   
    document.getElementById("title").textContent = "Foot Gear";
    document.getElementById("main").style.display="block";
    
    document.getElementById("ch1").style.backgroundImage = "url(gears/f1.png)";
    document.getElementById("ch2").style.backgroundImage = "url(gears/f2.png)";
    document.getElementById("ch3").style.backgroundImage = "url(gears/f3.png)";
});

document.getElementById("main").addEventListener("click", function(){
    document.getElementById("main").style.display="none";
});