var span = document.getElementById('clockTime');
var span = document.getElementById('clockDate');

function currentTime() {
  var time = new Date();
  var seconds = time.getSeconds();
  var minutes = time.getMinutes();
  var hours = time.getHours();

  var day = time.getDay();
  var month = time.getMonth();
  var year = time.getFullYear();


  //clock.textContent = day + "." + month + "." + year + " - " + ("0" + hours).substr(-2) + ":" + ("0" + minutes).substr(-2) + ":" + ("0" + seconds).substr(-2) ;
  clockTime.textContent = ("0" + hours).substr(-2) + ":" + ("0" + minutes).substr(-2) + ":" + ("0" + seconds).substr(-2) ;
  clockDate.textContent = day + "." + month + "." + year;
}

setInterval(currentTime, 50);    