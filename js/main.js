//a célom az hogy a celziust átváltsam fareheitbe a váltószám az celzius x1.8 + 32;
function change(){
    //celsius to farenheit
    let c = document.getElementById('data').value;
    let f = (c * 1.8) + 32;
    document.getElementById('res').innerText = `${c} C = ${f} F`;
    let k = parseInt(c);
    document.getElementById('ress');

     //celsius to kelvin
     let kelv = Math.round (k + 273.15);
     document.getElementById('back').innerText = `${c} C = ${kelv} K`;
 
     //celsius to Reaumur
     let rea = k * 0.8;
     document.getElementById('reas').innerText = `${c} C = ${rea} Rea`;
 
     //celsius to Rankine
     let ran = Math.round(k + 273.15) * 9/5;
     document.getElementById('rans').innerText = `${c} C = ${ran} Ra`; 
    if(k <= -20){
        //mn-btn  document.getElementById("myDiv").style.borderColor = "green purple";  rstbtn

        document.getElementById('first').style.backgroundImage = "url('/grafika-beadand-/images/kep6.jpg')";
        res.style.color="yellow";
        back.style.color="yellow";
        reas.style.color="yellow";
        rans.style.color="yellow";
        ress.style.color="yellow";
        sdh.style.color="yellow";
        document.getElementById("mn-btn").style.borderColor="yellow";    
        document.getElementById("mn-btn").style.color="yellow";  
        document.getElementById("mn-btn").style.backgroundColor="lightgray";  

        document.getElementById("rstbtn").style.borderColor="yellow";    
        document.getElementById("rstbtn").style.color="yellow";  
        document.getElementById("rstbtn").style.backgroundColor="lightgray";      
    }
    else if(k <= 0){
        document.getElementById('first').style.backgroundImage = "url('/grafika-beadand-/images/kep.jpg')";
        res.style.color="black";
        back.style.color="black";
        reas.style.color="black";
        rans.style.color="black";
        ress.style.color="black";
        sdh.style.color="black";    
        document.getElementById("mn-btn").style.borderColor="black";    
        document.getElementById("mn-btn").style.color="black";  
        document.getElementById("mn-btn").style.backgroundColor="white";    

        document.getElementById("rstbtn").style.borderColor="black";    
        document.getElementById("rstbtn").style.color="black";  
        document.getElementById("rstbtn").style.backgroundColor="white";      
    }
    else if(k >0 && k <= 10){
        document.getElementById('first').style.backgroundImage = "url('/grafika-beadand-/images/kep1.jpeg')";
        res.style.color="yellow";
        back.style.color="yellow";
        reas.style.color="yellow";
        rans.style.color="yellow";
        ress.style.color="yellow";
        sdh.style.color="yellow";    
        document.getElementById("mn-btn").style.borderColor="yellow";    
        document.getElementById("mn-btn").style.color="yellow";  
        document.getElementById("mn-btn").style.backgroundColor="lightgray";    

        document.getElementById("rstbtn").style.borderColor="yellow";    
        document.getElementById("rstbtn").style.color="yellow";  
        document.getElementById("rstbtn").style.backgroundColor="lightgray";      
    }
    else if(k >10 && k<= 20){
        document.getElementById('first').style.backgroundImage = "url('/grafika-beadand-/images/kep3.jpeg')";
        res.style.color="red";
        back.style.color="red";
        reas.style.color="red";
        rans.style.color="red";
        ress.style.color="red";
        sdh.style.color="red";    
        document.getElementById("mn-btn").style.borderColor="red";    
        document.getElementById("mn-btn").style.color="red";  
        document.getElementById("mn-btn").style.backgroundColor="white";    

        document.getElementById("rstbtn").style.borderColor="red";    
        document.getElementById("rstbtn").style.color="red";  
        document.getElementById("rstbtn").style.backgroundColor="white";      
    }
    else if(k >= 30){
        document.getElementById('first').style.backgroundImage = "url('/grafika-beadand-/images/kep5.jpeg')";
        res.style.color="green";
        back.style.color="green";
        reas.style.color="green";
        rans.style.color="green";
        ress.style.color="green";   
        sdh.style.color="green";    
        document.getElementById("mn-btn").style.borderColor="green";    
        document.getElementById("mn-btn").style.color="green";  
        document.getElementById("mn-btn").style.backgroundColor="white";    

        document.getElementById("rstbtn").style.borderColor="green";    
        document.getElementById("rstbtn").style.color="green";  
        document.getElementById("rstbtn").style.backgroundColor="white";      
    }




}window.addEventListener('load',change)
/* átvittem a main függvénybe
function change2(){
  //  let cs = document.getElementById('data1').value;
    let celsius = parseInt(cs);
    let k = celsius + 273.15;
    document.getElementById('back').innerText = `${cs} C = ${k} K`;

}window.addEventListener('load',change2)
*/

//reset button

function reset(){
    document.getElementById('data').value = "0";
    document.getElementById('res').innerText = `0 C = 0 F`;
    document.getElementById('back').innerText = `0 C = 0 K`;
    document.getElementById('reas').innerText = `0 C = 0 Rea`;
    document.getElementById('rans').innerText = `0 C = 0 Ra`;
    res.style.color="black";
    back.style.color="black";
    reas.style.color="black";
    rans.style.color="black";
    ress.style.color="black";
    sdh.style.color="black";

    document.getElementById("mn-btn").style.borderColor="white";    
    document.getElementById("mn-btn").style.color="white";  
    document.getElementById("mn-btn").style.backgroundColor="lightgray";  

    document.getElementById("rstbtn").style.borderColor="white";    
    document.getElementById("rstbtn").style.color="white";  
    document.getElementById("rstbtn").style.backgroundColor="lightgray";      

    document.getElementById('first').style.backgroundImage = "none";
}window.addEventListener('load',reset)


  
