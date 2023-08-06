const isOdd = function(address) {
  return address % 2 != 0; //remainder of 0 = even and condition is true.  This reverses it
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));