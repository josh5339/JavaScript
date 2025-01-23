// Ask the user for their first name
 var fName = prompt("Enter your first name:");

 // Display a welcome message
  document.write("Hello, " + fName + "! Welcome to the program.<br>");

 // Create a constant for the value of Pi (7 significant digits)
 const piValue = 3.1415926;

 // Ask the user to input their favorite number
 var myFavNum = prompt("Enter your favorite number:");

// Display the user's favorite number
document.write("Your favorite number is: " + myFavNum + "<br>");

// Use the favorite number as the radius to calculate the area of a circle
var radius = parseFloat(myFavNum);// Convert to a number
var myArea = piValue * radius * radius;

// Display the area of the circle
 document.write(
   "If the radius of a circle is " +
   radius +
   ", the area of the circle is: " +
    myArea +
    "<br>"
  );

  // Display all variable values with descriptions
  document.write("<br>Summary of Variables:<br>");
document.write("First Name (fName): " + fName + "<br>");
document.write("Value of Pi (piValue): " + piValue + "<br>");
document.write("Favorite Number (myFavNum): " + myFavNum + "<br>");
 document.write("Circle Area (myArea): " + myArea + "<br>");
