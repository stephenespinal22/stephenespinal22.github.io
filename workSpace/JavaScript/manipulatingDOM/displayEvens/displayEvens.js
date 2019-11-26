//this function will display the result
function displayResult() {

  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var num3 = document.getElementById("num3").value;
  var result = "Here are the even numbers between " + num1 + " and " + num2 + " by " + num3 +"'s: \n";
  console.log(num1);
  console.log(num3);
  num1 = Number(num1);
  num2 = Number(num2);
  num3 = Number(num3);
  for(var i = num1; i <= num2; i += num3) {

      if (i % 2 == 0)
      result = result + i + "\n";
   }

  document.getElementById("result").innerText = result;
  document.getElementById("answer").style.display = "block";

  return false;
}
