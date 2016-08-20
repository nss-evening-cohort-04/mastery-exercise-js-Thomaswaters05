// THESE ARE THE MAIN ELEMENTS FOR EQUATION
var height = document.getElementById("tree_height");
var characterOption = document.getElementById("charct_opt");
var submitButton = document.getElementById("getTree");


// UPON "CLICK" OR "KEYPRESS"(ENTER)- THE SUBMIT BUTTON WILL ENGAGE
submitButton.addEventListener("click", correctInput);
addEventListener("keypress", checkReturn);

function checkReturn (e){
  if (e.keyCode == 13){
   correctInput()
  }
}

// ****TESTING AND ADDING COMMENTS IN CASE SOMEONE DOES NOT INPUT PROPERLY**** PERSONAL NOTE: This came easy!

function correctInput () {
  if (height.value == "" || characterOption.value == "") {
    alert("Please enter a numerical value in the height field and a single character within the input field");
} else  {
    height = height.value;
    characterOption = characterOption.value;
    generateTreeObject(height, characterOption);
        };
}

// TW PERSONAL NOTE: Creating the object and deleted my prior wrong doing of height * charoption (<<<--not correct). Create an object, console.log it, and create the next function.
// think of it as information traveling from one block to the next!! (TW-Study more on this)

function generateTreeObject(height, characterOption) {
    // console.log(height, characterOption);
    var tree = {
        ht: height,
        ch: characterOption
    }
    growTree(tree);

}

// EQUATION TW NOTES: (MAKE SURE YOU UNDERSTAND- HARDEST PART OF QUIZ- STUDY THESE TYPES SCENARIOS)
// TW NOTE: TAKE NOTE OF SPACING BETWEEN AND USE README!!

function growTree(tree) {
    var characters = tree.ch;
    for (var i = 0; i < tree.ht; i++) {
        var numChar = 2 * i + 1;
        var numSpace = tree.ht - i;
        console.log(" ".repeat(numSpace) + characters.repeat(numChar));
    }
}