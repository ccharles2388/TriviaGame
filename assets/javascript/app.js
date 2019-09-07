
var correct = 0;
var incorrect = 0;
var q1answer = "True"
var q2answer = "False"
var q3answer = "True"

// Counter Decreases By 1 Second
var timeLeft = 30;
var elem = document.getElementById('timeleft');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft === 0) {
    clearTimeout(timerId);
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeexpired();
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;

  }
}

function timeexpired() {
  if ($("#q1True").is(':checked')) {
    correct++;
    console.log(correct);
    $("#correct").text(correct);
  } else {
    incorrect++;
    console.log(incorrect);
    $("#incorrect").text(incorrect);

  }

  if ($("#q2CorrectAnswer").is(':checked')) {
    correct++;
    console.log(correct);
    $("#correct").text(correct);
  }
  else {
    incorrect++;
    console.log(incorrect);
    $("#incorrect").text(incorrect);
  }

  if ($("#q3CorrectAnswer").is(':checked')) {
    correct++;
    console.log(correct);
    $("#correct").text(correct);
  }
  else {
    incorrect++;
    console.log(incorrect);
    $("#incorrect").text(incorrect);
  }

}


// On Click Event T0 Submit Before Time Expires
$("#submit").on("click", function () {
  if ($("#q1True").is(':checked')) {
    correct++;
    console.log(correct);
    $("#correct").text(correct);
  } else {
    incorrect++;
    console.log(incorrect);
    $("#incorrect").text(incorrect);

  }

  if ($("#q2CorrectAnswer").is(':checked')) {
    correct++;
    console.log(correct);
    $("#correct").text(correct);
  }
  else {
    incorrect++;
    console.log(incorrect);
    $("#incorrect").text(incorrect);
  }

  if ($("#q3CorrectAnswer").is(':checked')) {
    correct++;
    console.log(correct);
    $("#correct").text(correct);
  }
  else {
    incorrect++;
    console.log(incorrect);
    $("#incorrect").text(incorrect);
  }

})




