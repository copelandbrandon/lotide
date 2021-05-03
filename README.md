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

The following functions require refactoring prior to being fully implemented:

* assertObjectsEqual
* eqObjects
* countLetters
* countOnly
* findKey
* findKeyByValue
* letterPositions
* map
* takeUntil
* without