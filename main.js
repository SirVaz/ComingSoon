/** Comming soon time */
jQuery(document).ready(function( $ ) {

    $('.countdown').each(function() {
      $(this).countdown({
          until: new Date($(this).attr('data-date'))
      });
    });
    
  });
  

/*
const resultado = fizzBuzz(15);
//console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return 'não é um numero';

    else if (entrada % 3 === 0 && entrada % 5 === 0 )
        return 'fizzBuzz';
    if(entrada % 3 === 0)
        return 'fizz';
    else if(entrada % 5 === 0 )
        return 'Buzz';

    return entrada;
};
*/
setInterval(getTimeSite, 1000);
function getTimeSite(){

    let date = new Date();

    let stime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    //console.log(stime);
    let elem = document.getElementById("clock");
    elem.innerHTML = stime;
};
getTimeSite();

//setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
  
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" 
            + min + ":" + sec + am_pm;
  
    document.getElementById("clock")
            .innerHTML = currentTime;
}
showTime();