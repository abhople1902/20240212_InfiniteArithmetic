/* My Class-based implementation of an infinite precision Integer. */

class InfiniteNumber {

  /** An internal member Array to contain the digits of the Infinite Integer.
   * @private
   * @type {Array<Number>}
   */
  _internalArray = []

  constructor(inputObject) {

    console.log("Just inside the constructor " + typeof (inputObject))

    if (typeof (inputObject) === "number") {

      // check if Number is not a NaN
      if (isNaN(inputObject)) {
        throw new Error("Input is NaN.")
      }

      // check for negative values
      if (inputObject < 0) {
        throw new Error("Input cannot be negative")
      }

      // check for integral values only
      if ((inputObject % 1) != 0) {
        throw new Error("Input needs to be an integral value.")
      }

      while (inputObject != 0) {
        this._internalArray.unshift(inputObject % 10)
        inputObject = Math.floor(inputObject / 10)
      }
    } else if (typeof (inputObject) === "string") {

      // check if length is not zero
      if (inputObject.length == 0) {
        throw new Error("Empty string is not accepted.")
      }

      // check if every character is a decimal digit
      let myRegex = /^[0-9]+$/
      if (!myRegex.test(inputObject)) {
        throw new Error("String can have decimal numbers only.")
      }

      for (let index = 0; index < inputObject.length; index++) {
        const currentDigit = parseInt(inputObject.charAt(index))
        this._internalArray.push(currentDigit)
      }

    }

  } else if(Array.isArray(inputObject)) {
  console.log("You sent an Array")

  // TODO validate the individual elements of the inputArray and initialize
  // the _internalArray
  inputObject


  // initialize the member array
  this._internalArray = inputObject

} else if (typeof inputObject === "object") {  // IS THIS HOW ITS DONE?
  console.log("You sent an Object")

  // TODO check if this object has getInternalArray() and make a deep copy
  // and assign it to local _internalArray

  // initialize the member array
  this._internalArray = [4, 5, 6]

} else {
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
  return this._internalArray.join('')
}

  

}

// Default export of the class
module.exports = InfiniteNumber