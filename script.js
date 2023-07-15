
function displayTime(){
    let DateTime= new Date();//current date and time
    let hours=padZero(DateTime.getHours());
    let minutes=padZero(DateTime.getMinutes());
    let seconds=padZero(DateTime.getSeconds());
    let ampm= document.getElementById('ampm');
    if(hours>12){
        hours=hours-12;
        ampm.innerHTML='PM';
    }
    document.getElementById('hours').innerHTML=hours;
    document.getElementById('minut').innerHTML=minutes;
    document.getElementById('sec').innerHTML=seconds;
}

function padZero(num){
    if(num<10){
        return "0"+num;
    }else{
        return num;
    }
}
const Allmonth=["January","February","March","April","June","July","August","September","October","November","December"];
function displayDate(){
    let DateTime= new Date()
    let date=DateTime.getDate();
    let month=Allmonth[DateTime.getMonth()-1];
    let year=DateTime.getFullYear();
    document.getElementById('date').innerHTML=date;
    document.getElementById('month').innerHTML=month;
    document.getElementById('year').innerHTML=year;
}
displayDate();
setInterval(displayTime,500);
