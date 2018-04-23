var finished = false;
do{
  var calculator_type = prompt("Enter 'basic' or 'advanced' ");
  if(calculator_type == "basic"){
    // get the user inputs
    var value1 = prompt("Enter first value");
    var value2 = prompt("Enter the second value");
    var choice = prompt("Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide (mo)dulus") || "a";

    switch(choice){
      case "a":
        alert(value1 + value2);
        finished = true;
        break;
      case "s":
        alert(value1 - value2);
        finished = true;
        break;
      case "m":
        alert(value1 * value2);
        finished = true;
        break;
      case "d":
        alert(value1 / value2);
        finished = true;
        break;
      case "mo":
        alert(value1 % value2);
        finished = true;
        break;
    }
  }

}while(!finished);
