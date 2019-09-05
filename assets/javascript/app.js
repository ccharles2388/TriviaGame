
var correct=0;
var incorrect=0;
var q1answer="True"
var q2answer="False"
var q3answer="True"

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


// On Click Event T0 Submit Before Time Expires
$("#submit").on("click", function(){
  if($("#q1True").val()===q1answer) {
    correct++;
    console.log(correct);
  }
  else {
    incorrect++;
    console.log(incorrect);
  }

  if($("#q2True").val()===q1answer) {
    correct++;
    console.log(correct);
  }
  else {
    incorrect++;
    console.log(incorrect);
  }

  if($("#q3True").val()===q1answer) {
    correct++;
    console.log(correct);
  }
  else {
    incorrect++;
    console.log(incorrect);
  }
 
}) 


    

