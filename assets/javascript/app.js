// Counter Decreases By 1 Second
var timeLeft = 30;
    var elem = document.getElementById('timeleft');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == 0) {
        clearTimeout(timerId);
        doSomething();
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }
    

