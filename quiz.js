
// THESE ARE THE MAIN ELEMENTS FOR EQUATION
var height = document.getElementById("tree_height");
var characterOption = document.getElementById("charct_opt");
var submitButton = document.getElementById("getTree");


// ****TESTING AND ADDING COMMENTS IN CASE SOMEONE DOES NOT INPUT PROPERLY**** PERSONAL NOTE: This came easy!

function correctInput () {
  if (height.value >= 100) {
    alert("Please enter value lower than 100. You may choose any character you please for the next input field.");
} else  {
    height = height.value;
    characterOption = characterOption.value;
    generateTreeObject(height, characterOption);
        };
}


// TW PERSONAL NOTE: Creating the object and deleted my prior wrong doing of height * charoption (<<<--not correct). Create an object, console.log it, and create the next function.
// think of it as information traveling from one block to the next!! (TW-Study more on this)

function generateTreeObject (height, characterOption) {
  // console.log(height, characterOption);
  var tree = {
    ht : height ,
    ch : characterOption
  }
growTree (tree);

}

// EQUATION TW NOTES: (MAKE SURE YOU UNDERSTAND- HARDEST PART OF QUIZ- STUDY THESE TYPES SCENARIOS)
// TW NOTE: TAKE NOTE OF SPACING BETWEEN AND USE README!!

function growTree (tree) {
   var spaces = tree.ht - 1;
   var characters = tree.ch;
   var manipulater = "";
   for (i = 0 , x = 0; i <= tree.ht; i++ , x--) {
    manipulater+=characters;

     console.log(manipulater);



    // console.log(characterOption.repeat(height));

  }
}

submitButton.addEventListener("click", correctInput);
