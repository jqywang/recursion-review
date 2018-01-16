// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, body) {
  var allClasses = [];
  if (body === undefined) {
    body = document.body;
  }
  if (body.classList) {
    if (body.classList.contains(className)) {
      allClasses.push(body);
    }
  }
  if (body.hasChildNodes()) {
    //iterate through childnodes
    var children = body.childNodes;
    console.log(children[0]);
    for (var i = 0; i < children.length; i ++) {
      allClasses = allClasses.concat(getElementsByClassName(className, children[i]));
    }
  }
  // your code here
  // use document.body, elements.classlist, element.childnodes
  return allClasses;
};
