function foo() {
  var bar = false;
  quux = 13;
  function zip() {
    var quux = 12;
    bar = true;
  }
  return zip;
}