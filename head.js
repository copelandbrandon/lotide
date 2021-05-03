const head = function(array){
  return array[0];
};

// prior testing
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), undefined);
// assertEqual(head([8]), 8)
module.exports = head;