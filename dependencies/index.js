const InfiniteNumber = require("./InfiniteNumber");

/** Testing function to test the construction of the InfiniteNumber 
 * @param {*} inputParam anyinput to construct with
*/
function testInfiniteNumberConstruction(inputParam1, inputParam2) {

  // initializing without parameter
  let inf1 = new InfiniteNumber(inputParam1)
  let inf2 = new InfiniteNumber(inputParam2)
  // console.log(inf1 instanceof InfiniteNumber)
  console.log(inf1.getInternalArray())

  console.log("\n")

  console.log(inf2.getInternalArray())


  // console.log(inf1.Add())
  console.log(inf1.Sub(inf2))

}

module.exports = { testInfiniteNumberConstruction }