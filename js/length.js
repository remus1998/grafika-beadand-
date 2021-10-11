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

    let mm = k * 1000000;
    document.getElementById('test4').innerText= `${km} Km = ${mm} mm`;

}window.addEventListener('load',change2)


function reset(){
    document.getElementById('test').innerText= `0 Km = 0 m`;
    document.getElementById('test2').innerText= `0 Km = 0 deciméter`;
    document.getElementById('test3').innerText= `0 Km = 0 centiméter`;
    document.getElementById('test4').innerText= `0 Km = 0 milliméter`;
    
    
}window.addEventListener('load',reset)

function main(){
    window.open('https://remus1998.github.io/ConverterGatherer/','_blank') 
  }window.addEventListener('load',main)