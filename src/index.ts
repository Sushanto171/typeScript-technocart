function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || typeof toUpper === "undefined") {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

// console.log(formatString("Hello"),
// formatString("Hello", true)  ,
// formatString("Hello", false)
// );

type Items = {
  title: string;
  rating: number;
};

type ItemsOfArray = Items[];

function filterByRating(items: ItemsOfArray): ItemsOfArray {
  const highestRatings: ItemsOfArray = items.filter(
    (item: Items) => item.rating >= 4
  );
  return highestRatings;
}

// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 9.2 },
//   { title: "Book C", rating: 8.9 }
// ];

// console.log(filterByRating(books));
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let array: T[] = [];
  arrays.forEach((singleArray) =>
    singleArray.forEach((value) => array.push(value))
  );
  return array;
}

const b = concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
const a = concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]
// console.table({a,b})

class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {
    return `"Make: ${this.make}, Year: ${this.year}"`;
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    return `"Model : ${this.model}"`;
  }
}
const car = new Car("Toyota", 2002, "Corolla");
car.getInfo();
car.getModel();

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

processValue("hello");
processValue(10);

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if(products.length === 0) return null;

  return products.reduce((maxProduct:Product, currentProduct: Product)=> currentProduct.price > maxProduct.price ? currentProduct: maxProduct)
}

const products = [
  { name: "Pen", price: 0 },
  { name: "Notebook", price: 99 },
  { name: "Bag", price: 1 },
];

// console.log(getMostExpensiveProduct(products));
// Output: { name: "Bag", price: 50 }
