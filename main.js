/*Code inspired by youtube tutorial, code for the rgb slider to work */

var input = document.querySelectorAll("input");
var rgbValues = document.getElementById("rgb");

for(var i = 0; i < input.length; i++){
    input[i].addEventListener("input", function(){
      var red = document.getElementById("red").value,
           green = document.getElementById("green").value,
           blue = document.getElementById("blue").value;

           var display = document.getElementById("display");
           display.style.background = "rgb(" + red + "," + green + "," + blue +")";
           
           rgbValues.textContent = red + "," + green + "," + blue;

    });
}
/*Code for picking up all values and output a message to the user */ 
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const values = document.getElementById("rgb-values");
const btn = document.getElementById("generate-btn")

function update() {
  const value1 = red.value;
  const value2 = green.value;
  const value3 = blue.value;
 
  values.innerHTML= "Your value is:" + value1 + "," + value2 + "," + value3;
 
}
btn.addEventListener("click",update);

/*Code that pickes upp all the id's of the modal and puts them into function, it handels the error message and the message shoing up after clicking the button */
const form = document.getElementById('modal');
const usernameInput = document.getElementById('username');
const saveBtn = document.getElementById('save-btn');
const error = document.getElementById('error');
const resultDiv = document.getElementById('result');
const generateBox = document.getElementById('generate-box');

saveBtn.addEventListener('click', function(e) {
  e.preventDefault();
  if (usernameInput.value.trim() === '') {
    error.style.display = 'block';
  } else {
    error.style.display = 'none';

    const generatedParagraph = document.createElement('div');
    generatedParagraph.textContent = 'Welcome ' + usernameInput.value + ' choose your color on the slide to see the rgb value!';
   
    generateBox.prepend(generatedParagraph);
   
    form.style.display = 'none';
    form.reset();
  }
});

//* Code for reseting the values of rgb values,pickes up the id and changes the innerHTML to empty *//
const resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener("click", function() {
  red.value = 0;
  green.value = 0;
  blue.value = 0;
  values.innerHTML = "";
});
