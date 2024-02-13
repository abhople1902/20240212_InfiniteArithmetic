const { testInfiniteNumberConstruction } = require("./dependencies")
const InfiniteNumber = require("./dependencies/InfiniteNumber")

function testingFunction() {
    console.log("\n\n")

    // testInfiniteNumberConstruction(NaN)
    // testInfiniteNumberConstruction(1345789)
    testInfiniteNumberConstruction("9876598765678987654567898765456789876545678909876546789")
    // testInfiniteNumberConstruction({})
    // testInfiniteNumberConstruction(new InfiniteNumber(1))
    // testInfiniteNumberConstruction(() => { console.log("abc")})

    console.log("\n\n")
}

testingFunction()