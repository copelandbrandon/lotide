# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @copelandbrandon/lotide`

**Require it:**

`const _ = require('@copelandbrandon/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first item in an array
* `middle(array)`: returns the middle items of an array
* `tail(array)`: returns the last item of an array
* `assertEqual(function(), expectedResult)`: will assert that the return of a given function is as expected
* `eqArrays(array1, array2)`: will return true or false depending on if the two arrays are equal
* `assertArraysEqual(array1, array2)`: will assert if two arrays are identical by using eqArrays
* `assertObjectsEqual(object1, object2)`: will assert if two objects are identical by using eqObjects
* `eqObjects(object1, object2)`: will return true or false whether the objects match or not
* `countLetters(string)`: will return an array of values correlating to the amount of times each element appears in a given string
* `countOnly(allItems, itemsToCount)`: will return an array of items only present in both arguments
* `findKey(object, callback)`: will return the first key matching the result of the given callback
* `findKeyByValue(object, value)`: will return the first key that matches the given value
* `letterPositions(string)`: will return an array of indeces correlalating to individual letter positions
* `map(array, callback)`: will return a new array that has been modified by the callback passed
* `takeUntil(array, callback)`: will return a new array including elements up until the element is equal to the callback value
* `without(array, value)`: returns a new array excluding items matching the value passed