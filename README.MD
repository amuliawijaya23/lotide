# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @amuliawijaya23/lotide`

**Require it:**

`const _ = require('@amuliawijaya23/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: assert whether two arrays are equal
* `assertEqual(...)`: assert whether two values are equal
* `assertObjectsEqual(...)`: assert whether two objects are equal
* `countLetter(...)`: count number of specified letter within a specified string
* `countOnly(...)`: count number of specified item in an array
* `eqArrays(...)`: check whether two arrays are equal
* `eqObjects(...)`: check whether two objects are equal
* `findKey(...)`: find the key of an object through callback
* `findKeyByValue(...)`: find key of an object given its value
* `flatten(...)`: return nested arrays into one single array
* `head(...)`: return the value of the first index in the array
* `letterPositions(...)`: return an array of index of the specified letter within a sentece/string
* `map(...)`: applies a callback function to every value inside an array
* `middle(...)`: return value of the middle index of an array
* `tail(...)`: remove and return an array without its first index
* `takeUntil(...)`: iterate through an array and return an array until the specified value within the itterated array
* `without(...)`: filter and array from a specified value
