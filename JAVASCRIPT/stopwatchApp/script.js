/*To load the JavaScript code once the browser window has completely loaded, we use the window.onload function.*/
/* JS comes here */
window.onload = function () {
    let seconds = 0;
    let tens = 0;
    /*We have written the code to access the HTML*/
    let appendTens = document.getElementById("tens");
    let appendSeconds = document.getElementById("seconds");
    let buttonStart = document.getElementById("button-start");
    let buttonStop = document.getElementById("button-stop");
    let buttonReset = document.getElementById("button-reset");

    /*
    To make the start button functional, we will add a click event listener function to this button, which will get executed when any user clicks on this button.
    There are two primary ways of doing so:

    1. Using onclick attribute in HTML
    By using an onclick attribute in the HTML tag. In this case, in the button tag, we can add an onclick attribute and provide a Javascript function name to it. The function will be executed when the button is clicked. Here's an example,

    <button id="button-start" onclick="buttonStart()">Start</button>
    where, buttonStart is a function in Javascript.

    2. Using onclick property in JS
    We can also use the onclick property in Javascript to assign a handler function, to be called when the user clicks on the HTML element.

    <button id="button-start">Start</button>
    <script>
        /* We access HTML tag in JS and then use onclick property with it 
        document.getElementById("button-start").onclick = function() {
        // function definition
    }
    </script>
    */
    let Interval;
    /*we should first clear any previous running execution.*/
    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval=setInterval(timerEngine,10);
     }
     /*
     Inside the event handler function, use the clearInterval() function with the argument as Interval variable to stop the timer when the Stop button is clicked.
      */
     buttonStop.onclick = function() {
        clearInterval(Interval);
        
    }

    /*
    The Reset button will not only stop the stopwatch timer but will also reset the seconds and tens millisecond counter to 00 in the user interface.
     */

    buttonReset.onclick = function() {
        clearInterval(Interval);
        seconds=0;
        tens=0;
        appendSeconds.innerHTML="00";
        appendTens.innerHTML="00";
    }
    /*
     Note: 1 second = 1000 milliseconds or 1 sec = (100)*10 milliseconds or (100)*(tens) milliseconds. 
     In this project, we will be working with seconds and 10 milliseconds which we are addressing as tens in the code.
     The prime purpose of the timerEngine() function is to increase the stopwatch timer by 10 milliseconds 
     every time it's called.
     */
    function timerEngine() {
        tens++;

        if (tens <= 9) {
            // to show double digit for single digit value like 01, 02, etc.
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "00";
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }
}  // window.onload ends