// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //if (is array)
  //add brackets, pass inside of array into funciton again
  //if object
  //add curly brackets, set 'key' + ':' + 'value put into function again'
  // add '"' to it

  if (Array.isArray(obj)) {
    var arrayString = [];
    for (var i = 0; i < obj.length; i++) {
      arrayString.push(stringifyJSON(obj[i]));
    }
    arrayString = arrayString.join(',');
    return '[' + arrayString + ']';
  } else if (typeof obj === 'object' && obj != null) {
    var objString = [];
    for (var key in obj) {
      if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
        var keyValueString = stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
        objString.push(keyValueString);
      }
    }
    objString = objString.join(',');
    return '{' + objString + '}';
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj !== 'function' || obj !== undefined) {
    return '' + obj;
  }
  
};
