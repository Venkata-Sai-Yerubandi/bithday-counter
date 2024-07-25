window.onload = () => {
    document.querySelector("#calculate").onclick = calculate;
    document.querySelector("#reset").onclick = reset;
}
function calculate() {
    const date =document.querySelector("#date").value;

    const stop = document.querySelector("#stop");
    

const endTime = new Date(date + " " );

 const interval=setInterval(() => calculateTime(endTime),1000);

 stop.addEventListener('click',() => {
    clearInterval(interval)
 })
}

function calculateTime( endTime ){
    const currentTime = new Date();

    const days= document.querySelector('#countdays');
    const hours= document.querySelector('#counthours');
    const minutes= document.querySelector('#countminutes');
    const seconds= document.querySelector('#countseconds');


if ( endTime > currentTime) {
    const timeLeft= (endTime - currentTime) / 1000;
    console.log(timeLeft);
    days.innerText = Math.floor(timeLeft/(24*60*60));
    hours.innerText = Math.floor((timeLeft/(60*60)) % 24);
    minutes.innerText = Math.floor((timeLeft/60) % 60);
    seconds.innerText = Math.floor(timeLeft % 60);
}
else{
    days.innerText=0
    hours.innerText=0
    minutes.innerText=0
    seconds.innerText=0


}
}
function reset(){
    document.querySelector('#countdays').innerText=0;
     document.querySelector('#counthours').innerText=0;
     document.querySelector('#countminutes').innerText=0;
     document.querySelector('#countseconds').innerText=0;

}


