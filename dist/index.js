"use strict";
function formatString(input, toUpper) {
    if (toUpper || typeof toUpper === "undefined") {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
}
function filterByRating(items) {
    const highestRatings = items.filter((item) => item.rating >= 4);
    return highestRatings;
}
// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 3.9 }
// ];
// console.log(filterByRating(books));
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
function concatenateArrays(...arrays) {
    let array = [];
    arrays.forEach((singleArray) => singleArray.forEach((value) => array.push(value)));
    return array;
}
const b = concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
const a = concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]
console.table({ a, b });
