var img1 = document.getElementById("hat");
var img2 = document.getElementById("top");
var img3 = document.getElementById("pants");
var img4 = document.getElementById("shoes");

var c1 = document.getElementById("choice1");
var c2 = document.getElementById("choice2");
var c3 = document.getElementById("choice3");
var c4 = document.getElementById("choice4");

var preV = document.getElementById("previous");
var next = document.getElementById("next");

var bgText = document.getElementById("bgText");

var num1 = 1;
var num2 = 1;
var num3 = 1;
var num4 = 1;

next.addEventListener("click", function(){
    if(num1>2){
        num1 =0;
    }
    
    if(num2>2){
        num2 =0;
    }
    
    if(num3>2){
        num3 =0;
    }
    
    if(num4>2){
        num4 =0 ;
    } 
    
    if (c1.checked){
        num1 += 1
        img1.src="gears/h"+num1+".png";
            
    }else if(c2.checked){
         num2 += 1
         img2.src="gears/b"+num2+".png";
        
    }else if(c3.checked){
         num3 += 1
         img3.src ="gears/l"+num3+".png";
        
    }else if(c4.checked){
        num4 += 1
        img4.src="gears/f"+num4+".png";
    
    }else {
        alert("Choose an option");
    }

    
});

preV.addEventListener("click", function(){
        
    if(num1<=1){
        num1 =4;
    }
    
    if(num2<=1){
        num2 =4;
    }
    
    if(num3<=1){
        num3 =4;
    }
    
    if(num4<=1){
        num4 =4;
    } 
        
    if (c1.checked){
        num1 -= 1;
        img1.src="gears/h"+num1+".png";
            
    }else if(c2.checked){
         num2 -= 1
         img2.src="gears/b"+num2+".png";
        
    }else if(c3.checked){
         num3 -= 1
         img3.src ="gears/l"+num3+".png";
        
    }else if(c4.checked){
        num4 -= 1
        img4.src="gears/f"+num4+".png";
    
    }else {
        alert("Choose an option");
    }

});

bgText.addEventListener("keyup", function(ev){
    
    if(ev.keyCode ==13){
        
        if(bgText.value == "combo1"){
            num1 = 1;
            num2 = 1;
            num3 = 1;
            num4 = 1;
            img1.src ="gears/h"+num1+".png";
            img2.src ="gears/b"+num2+".png";
            img3.src ="gears/l"+num3+".png";
            img4.src ="gears/f"+num4+".png";
            
        }else if(bgText.value =="combo2"){
            num1 = 2;
            num2 = 2;
            num3 = 2;
            num4 = 2;
            img1.src ="gears/h"+num1+".png";
            img2.src ="gears/b"+num2+".png";
            img3.src ="gears/l"+num3+".png";
            img4.src ="gears/f"+num4+".png";
            
        }else if(bgText.value =="combo3"){
            num1 = 3;
            num2 = 3;
            num3 = 3;
            num4 = 3;
            img1.src ="gears/h"+num1+".png";
            img2.src ="gears/b"+num2+".png";
            img3.src ="gears/l"+num3+".png";
            img4.src ="gears/f"+num4+".png";
        }
    }
});


