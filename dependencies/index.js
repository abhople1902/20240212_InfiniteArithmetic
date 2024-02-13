const InfiniteNumber = require("./InfiniteNumber");

/** Testing function to test the construction of the InfiniteNumber 
 * @param {*} inputParam anyinput to construct with
*/
function testInfiniteNumberConstruction(inputParam) {

  // initializing without parameter
  let inf1 = new InfiniteNumber(inputParam)
  // console.log(inf1 instanceof InfiniteNumber)
  console.log(inf1.getInternalArray())
  console.log("\n")
  console.log(inf1.Add())

}

module.exports = { testInfiniteNumberConstruction }