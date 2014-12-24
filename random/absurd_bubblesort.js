var readline = require('readline')
var reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});

var askIfLessThan = function (elementOne, elementTwo, callback) {
  reader.question("Is " + elementOne + " greater than " + elementTwo + "?", function (blahblah) {
    if (blahblah === "yes") {
      callback(true);
    } else {
      callback(false);
    }
  });
}



function innerBubbleSortLoop(arrray, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i === arrray.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  } else {

    askIfLessThan(arrray[i], arrray[i + 1], function (isGreaterThan) {
      if (isGreaterThan) {
        var temp = arrray[i];
        arrray[i] = arrray[i + 1];
        arrray[i + 1] = temp;
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arrray, i + 1, madeAnySwaps, outerBubbleSortLoop)
    });


  }
}

function absurdBubbleSort (arrray, sortCompletionCallback) {
  function outerBubbleSortLoop (madeAnySwaps) {
    // Begin an inner loop if `madeAnySwaps` is true, else call
    // `sortCompletionCallback`.
    if (madeAnySwaps) {
      innerBubbleSortLoop(arrray, 0, false, outerBubbleSortLoop)
    } else {
        sortCompletionCallback(arrray);
    }
  }
  outerBubbleSortLoop(true);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
