function change2(){
    let km = document.getElementById('dt').value;

    //km - m

    let m = km * 1000;
    document.getElementById('test').innerText= `${km} Km = ${m} m`;
    let k = parseInt(km);
    //km - dm
    let dm = k * 10000;
    document.getElementById('test2').innerText= `${km} Km = ${dm} dm`;

    //km - cm
    let cm = k * 100000;
    document.getElementById('test3').innerText= `${km} Km = ${cm} cm`;

}window.addEventListener('load',change2)


function reset(){
    document.getElementById('test').innerText= `0 Km = 0 m`;
    document.getElementById('test2').innerText= `0 Km = 0 deciméter`;
    document.getElementById('test3').innerText= `0 Km = 0 centiméter`;
    
}window.addEventListener('load',reset)
