function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || typeof toUpper === "undefined") {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}



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

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let array: T[] = [];
  arrays.forEach((singleArray) =>
    singleArray.forEach((value) => array.push(value))
  );
  return array;
}


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


function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;

  return products.reduce((maxProduct: Product, currentProduct: Product) =>
    currentProduct.price > maxProduct.price ? currentProduct : maxProduct
  );
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): "Weekday" | "Weekend" {
  if (day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

async function squareAsync(n: number): Promise<number> {
  return await new Promise((resolve, reject) => {
    if (n >= 0) {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    } else {
      reject("Negative number not allowed!");
    }
  });
}
