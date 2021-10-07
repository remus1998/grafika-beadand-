//a célom az hogy a celziust átváltsam fareheitbe a váltószám az celzius x1.8 + 32;
function change(){

    let c = document.getElementById('data').value;
    let f = (c * 1.8) + 32;
    document.getElementById('res').innerText = `${c} C = ${f} F`;
    let k = parseInt(c);
    document.getElementById('ress');
    if(k <= -20){
        document.body.style.backgroundImage = "url('/grafika-beadand-/images/kep4.jpeg')";
        res.style.color="red";
        ress.style.color="red";
    }
    else if(k <= 0){
        document.body.style.backgroundImage = "url('/grafika-beadand-/images/kep.jpg')";
        res.style.color="black";
        ress.style.color="black";
    }
    else if(k >0 && k <= 10){
        document.body.style.backgroundImage = "url('/grafika-beadand-/images/kep2.jpeg')";
        res.style.color="yellow";
        ress.style.color="yellow";
    }
    else if(k >10 && k<= 20){
        document.body.style.backgroundImage = "url('/grafika-beadand-/images/kep3.jpeg')";
        res.style.color="red";
        ress.style.color="red";
    }
    else if(k >= 30){
        document.body.style.backgroundImage = "url('/grafika-beadand-/images/kep5.jpeg')";
        res.style.color="green";
        ress.style.color="green";       
    }
}window.addEventListener('load',change)
