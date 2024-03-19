const { testInfiniteNumberConstruction } = require("./dependencies/index")
const InfiniteNumber = require("./dependencies/InfiniteNumber")

function testingFunction() {
    console.log("\n\n")

    // testInfiniteNumberConstruction(NaN)
    // testInfiniteNumberConstruction(1345789)
    // testInfiniteNumberConstruction({array1:"95013",array2:'00002'})  //Passing two arrays to create one object
    testInfiniteNumberConstruction(789, 456)
    // testInfiniteNumberConstruction({})
    // testInfiniteNumberConstruction(new InfiniteNumber(1))
    // testInfiniteNumberConstruction(() => { console.log("abc")})

    console.log("\n\n")
}

testingFunction()