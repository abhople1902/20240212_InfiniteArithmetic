/* My Class-based implementation of an infinite precision Integer. */

class InfiniteNumber {

  /** An internal member Array to contain the digits of the Infinite Integer.
   * @private
   * @type {Array<Number>}
   */
  _internalArray = []

  constructor(inputObject) {

    if (typeof (inputObject) === "number") {
      console.log("You sent a number")

      // TODO validate the number and only then initialize the _internalArray
      if (inputObject == NaN) {
        throw new Error(`Invalid number ${inputObject}`)
      } else if (inputObject == 0) {
        this._internalArray = [0]
      } else {
        var initializer = new Array();
        initializer = String(num1).split("").map((num1) => {
          return Number(num1)
        })
        this._internalArray = initializer
      }

    } else if (typeof (inputObject) === "string") {
      console.log("You sent a String")

      // TODO validate the String and only then initialize the _internalArray

      // initialize the member array
      this._internalArray = [2, 3, 4]

    } else if (Array.isArray(inputObject)) {  // IS THIS HOW ITS DONE?
      console.log("You sent an Array")

      // TODO validate the individual elements of the inputArray and initialize
      // the _internalArray

      // initialize the member array
      this._internalArray = inputObject

    } else if (typeof inputObject === "object") {  // IS THIS HOW ITS DONE?
      console.log("You sent an Object")

      // TODO check if this object has getInternalArray() and make a deep copy
      // and assign it to local _internalArray

      // initialize the member array
      this._internalArray = [4, 5, 6]

    } else {        // BHAI KYA KAR RAHA HAI?
      console.log("You sent some bullshit!")

      throw new Error(`Constuctor of IniniteNumber does not support this data`
        + ` type ${typeof inputObject}`)
    }

  }

  /** Helper method to return the _internalArray variable which contains the
   * Inifnite precision Integer.
   * @returns {Array<Number>} the internal array representing individual digits
   */
  getInternalArray() {
    // TODO, 

    var temp = new Array()
    temp = this._internalArray
    return temp
  }

  /** Helper method to return the representation of this Infinite Precision
   * 
   */
  getNumberAsString() {
    // TODO, concatenate the contents of _internalArray to a string and return

    let stringNum = parseInt(this._internalArray.join(''));
    return stringNum
  }

}