var emoji = function (length) {
  var line = "";
  for (var i = 0; i < length; i += 1) {
    line += "✊";
  }
  line += "<br>";
  return line;
};

var main = function (input) {
  input = parseInt(input);
  var myOutputValue = "";
  myOutputValue += emoji(input);
  if (!input % 2 == 0) {
    for (var i = 0; i < input - 2; i += 1) {
      for (var j = 0; j < input; j += 1) {
        if (j == Math.floor(input / 2) && i == Math.floor((input - 2) / 2.0)) {
          myOutputValue += "😒";
        } else if (j == 0 || j == input - 1) {
          myOutputValue += "✊";
        } else {
          myOutputValue += "👍";
        }
      }
      myOutputValue += "</br>";
    }
  } else {
    for (var i = 0; i < input - 2; i += 1) {
      for (var j = 0; j < input; j += 1) {
        if (
          (j == Math.floor(input / 2) && i == Math.floor((input - 2) / 2.0)) ||
          (j == Math.floor(input / 2) - 1 &&
            i == Math.floor((input - 2) / 2.0)) ||
          (j == Math.floor(input / 2) &&
            i == Math.floor((input - 2) / 2.0) - 1) ||
          (j == Math.floor(input / 2) - 1 &&
            i == Math.floor((input - 2) / 2.0) - 1)
        ) {
          myOutputValue += "😒";
        } else if (j == 0 || j == input - 1) {
          myOutputValue += "✊";
        } else {
          myOutputValue += "👍";
        }
      }
      myOutputValue += "</br>";
    }
    myOutputValue += emoji(input);
    return myOutputValue;
  }
  myOutputValue += emoji(input);
  return myOutputValue;
};
