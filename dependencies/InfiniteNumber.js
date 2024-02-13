/* My Class-based implementation of an infinite precision Integer. */

class InfiniteNumber {

  /** An internal member Array to contain the digits of the Infinite Integer.
   * @private
   * @type {Array<Number>}
   */
  _internalArray = []
  _primaryInternalArray = [1]

  constructor(inputObject) {

    console.log("Just inside the constructor " + typeof (inputObject))

    if (typeof (inputObject) === "number") {

      // checking if Number is not a NaN
      if (isNaN(inputObject)) {
        throw new Error("Input is NaN.")
      }

      // checking for negative values
      if (inputObject < 0) {
        throw new Error("Input cannot be negative")
      }

      // checking for integral values only
      if ((inputObject % 1) != 0) {
        throw new Error("Input needs to be an integral value.")
      }

      while (inputObject != 0) {
        this._internalArray.unshift(inputObject % 10)
        inputObject = Math.floor(inputObject / 10)
      }
    } else if (typeof (inputObject) === "string") {

      // checking if length is not zero
      if (inputObject.length == 0) {
        throw new Error("Empty string is not accepted.")
      }

      // checking if every character is a decimal digit
      let myRegex = /^[0-9]+$/
      if (!myRegex.test(inputObject)) {
        throw new Error("String can have decimal numbers only.")
      }

      for (let index = 0; index < inputObject.length; index++) {
        const currentDigit = parseInt(inputObject.charAt(index))
        this._internalArray.push(currentDigit)
      }

    } else if (Array.isArray(inputObject)) {
      console.log("You sent an Array")

      // TODO validate the individual elements of the inputArray and initialize
      // the _internalArray
      // inputObject


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


    /**
    * Main function for addition
    * @param {Array} primary
    * @param {Array} secondary
    * @returns {Array} result -
    */
  Add() {
    let result = new Array()
    var carry = 0

    let primary = this._primaryInternalArray
    let secondary = this._internalArray

    let l4 = 0
    let l1 = primary.length  //length of primary
    let l2 = secondary.length     //length of secondary
    let l3 = Math.abs(l1 - l2)      //difference in length
    let index = 0
    if (primary.length > secondary.length) {
      while (index < l3) {
        secondary.unshift(0);    //adding zeros to the secondary array
        index++
      }
    } else {
      while (index < l3) {
        primary.unshift(0);     //adding zeros to the primary array
        index++
      }
    }
    primary.reverse()
    secondary.reverse()

    //checking which length is greater in order to iterate with that counter
    if (l1 > l2) {
      l4 = l1
    } else {
      l4 = l2
    }

    //after reversing the arrays, adding each number to the other in iterations
    for (let index = 0; index < l4; index++) {
      var temp = primary[index] + secondary[index] + carry
      if (temp >= 10) {
        result.push(temp % 10)
        carry = Math.floor(temp / 10)
      } else {
        result.push(temp % 10)
        carry = 0
      }
    }
    if (carry > 0) {
      result.push(carry)     //pushing the last carry if it exists
    }
    result.reverse()        //reversing the result array
    return result
  }


  /**
 * Main function for subtraction
 * @param {Array} primary
 * @param {Array} secondary
 * @returns {Array} result1
 */
Sub() {
  let primary = this._primaryInternalArray
  let secondary = this._internalArray
  let redFlag = MagnitudeChecker(primary, secondary)  //checking which number is greater

  //Bringing back the original a state of arrays after addition
  if (redFlag == 1) {
      primary.reverse()
      primary.pop()
      primary.reverse()
      // secondary.reverse()
  } else {
      secondary.reverse()
      secondary.pop()
      primary.reverse()
      secondary.reverse()
  }

  let result1 = new Array()

  let temparray = new Array()

  let l4 = 0
  let l1 = primary.length
  let l2 = secondary.length
  let l3 = Math.abs(l1 - l2)
  let index = 0, flag = 0


  if (primary.length < secondary.length) {
      while (index < l3) {
          primary.unshift(0); //adding zeros to the primary array
          index++
      }
  } else {
      while (index < l3) {
          secondary.unshift(0);  //adding zeros to the secondary array
          index++
      }
  }


  if (l1 > l2) {
      l4 = l1
  } else {
      l4 = l2
  }

  let primaryNum = parseInt(primary.join(''));      //Checking the magnitude by joining the arrays
  let secondaryNum = parseInt(secondary.join(''));  //Checking the magnitude by joining the arrays

  primary.reverse()
  secondary.reverse()

  //The above joined arrays are compared and changes are made to primary
  //and secondary accordingly
  if (primaryNum < secondaryNum) {
      temparray = primary
      primary = secondary
      secondary = temparray
      flag = 1
  }

  /** main engine to subtract while iterating and borrowing from neighbours
  * if the neighbor is non-zero, it borrows directly and subtracts 1 from it
  * if the neighbor is zero, it borrows from the next non-zero number and makes the zero 9
  * the neighbor zero case is coupled with while loop to check for multiple zeros in a row
  * until a non zero number occurs
  */
  for (let index = 0; index < l4; index++) {
      let tempindex = index
      if (primary[index] < secondary[index]) {
          primary[index] += 10
          result1.push(primary[index] - secondary[index])
          if (index + 1 == l4) {
              break
          } else {
              if (primary[index + 1] == 0) {
                  let temp2 = index + 1
                  while (primary[temp2] == 0) {
                      primary[temp2] = 9
                      temp2++
                  }
                  primary[temp2] -= 1
              } else {
                  primary[index + 1] -= 1
              }
          }
      } else {
          result1.push(primary[index] - secondary[index])
      }
      index = tempindex
  }

  if (flag == 0) {
      return result1.reverse()
  } else {
      result1.push("-")       //adding the negative sign if the result is negative
      return result1.reverse()
  }
}

}





// Default export of the class
module.exports = InfiniteNumber