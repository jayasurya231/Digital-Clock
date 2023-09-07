let ampm = document.getElementById('ampm')

function Time(){
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = zero(dateTime.getMinutes());
    let sec = dateTime.getSeconds();

    if(hr>12){
        hr = hr - 12
        ampm.innerHTML="PM"
    }

    document.getElementById('hours').innerHTML=zero(hr)
    document.getElementById('mins').innerHTML=zero(min)
    document.getElementById('sec').innerHTML=zero(sec)

}

function zero(num){
    return num<10?"0"+num:num
}

setInterval(Time,500)