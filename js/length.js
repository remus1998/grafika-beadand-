function main(){
    window.open('https://remus1998.github.io/ConverterGatherer/', "_self") 
  }

function change2(){
    let m = document.getElementById('dt').value;

    //m - km
    let k = parseInt(m);
    let km = (m /1000).toFixed(4);
    document.getElementById('test').innerText =`${k} m = ${km} km`;

    //m - dm
    let dm = (m * 10).toFixed(2);
    document.getElementById('test2').innerText=`${k} m = ${dm} dm`;

    //m - cm
    let cm = (m * 100).toFixed(2);
    document.getElementById('test3').innerText=`${k} m = ${cm} cm`;

    //m - mm
    let mm = (m * 1000).toFixed(2);
    document.getElementById('test4').innerText= `${k} m = ${mm} mm`;
   
    //m - yd
    let yd =(m * 1.093613).toFixed(2);
    document.getElementById('test5').innerText= `${k} m = ${yd} yd`;

    //m - Miles
    let M =(m * 0.000621).toFixed(4);
    document.getElementById('test6').innerText=`${k} m = ${M} miles`; 

}window.addEventListener('load',change2)


function reset(){
    document.getElementById('test').innerText= `0 m = 0 km`;
    document.getElementById('test2').innerText= `0 m = 0 dm`;
    document.getElementById('test3').innerText= `0 m = 0 cm`;
    document.getElementById('test4').innerText= `0 m = 0 mm`;
    document.getElementById('test5').innerText= `0 m = 0 yd`;
    document.getElementById('test6').innerText= `0 m = 0 miles`;
    
}window.addEventListener('load',reset)

