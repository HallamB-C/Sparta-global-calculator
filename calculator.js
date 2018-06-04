var finished = false;
do{
  var calculator_type = prompt("Enter 'basic' , 'advanced' or 'BMI' ");
  if(calculator_type == "basic"){
    // get the user inputs
    var value1 = prompt("Enter first value");
    var value2 = prompt("Enter the second value");
    var choice = prompt("Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide (mo)dulus") || "a";
    value1 = parseInt(value1);
    value2 = parseInt(value2);
    
    switch(choice){
      case "a":
        alert("The result is " + value1 + value2);
        finished = true;
        break;
      case "s":
        alert("The result is " + value1 - value2);
        finished = true;
        break;
      case "m":
        alert("The result is " + value1 * value2);
        finished = true;
        break;
      case "d":
        alert("The result is " + value1 / value2);
        finished = true;
        break;
      case "mo":
        alert("The result is " + value1 % value2);
        finished = true;
        break;
    }
  }else if (calculator_type == "advanced") {
    // get the user inputs
    var value1 = prompt("Enter first value");
    var value2 = prompt("Enter the second value");
    var choice = prompt("Choose your action (p)ower (s)quare root") || "a";
    value1 = parseInt(value1);
    value2 = parseInt(value2);

    switch(choice){
      case "p":
        alert("The result is " + value1 ^ value2);
        finished = true;
        break;
      case "s":
        alert("Value1's square root is " + Math.sqrt(value1));
        alert("Value2's square root is " + Math.sqrt(value2));
        finished = true;
        break;
  }
}else if(calculator_type == "BMI"){
  // get the user inputs
  var value1 = prompt("Enter your weight in Kilograms");
  var value2 = prompt("Enter your height in meters");
  var BMI = Math.round(((value1 / value2) / value2)*10) / 10;
  alert("Your BMI is " + BMI);
}

}while(!finished);
