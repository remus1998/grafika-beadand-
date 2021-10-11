function change2(){
    let km = document.getElementById('dt').value;
    let m = km * 1000;
    document.getElementById('test').innerText= `${km} Km = ${m} m`;
    let k = parseInt(km);
}window.addEventListener('load',change2)

