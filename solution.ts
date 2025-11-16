// Problem 1
const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  return !value;
};

// Problem 2
const getLength = (value: string | unknown[]): number => {
  if (typeof value === "string") {
    return value.length;
  }
  return value.length;
};

// Problem 3
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}
// Problem 4
interface IBookType {
  title: string;
  rating: number;
}
const filterByRating = (books: IBookType[]): IBookType[] => {
  return books.filter((book) => book.rating >= 4);
};

// Problem 5
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((item) => item.isActive);
};
// Problem 6
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (book: Book): string =>
  `Title: ${book.title}, Author: ${book.author}, Published: ${
    book.publishedYear
  }, Available: ${book.isAvailable ? "Yes" : "No"}`;

// Problem 7
const getUniqueValues = (
  array1: (string | number)[],
  array2: (string | number)[]
) => {
  const mergedArray = [...array1, ...array2];
  const uniqueValues: (string | number)[] = [];
  mergedArray.forEach((item) => {
    if (!uniqueValues.includes(item)) {
      uniqueValues.push(item);
    }
  });

  return uniqueValues;
};

// Problem 8
interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}
const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) {
    return 0;
  }
  return products.reduce((acc, product) => {
    let currentProductPrice = product.price * product.quantity;

    if (typeof product.discount === "number") {
      currentProductPrice =
        currentProductPrice - (currentProductPrice * product.discount) / 100;
    }

    acc += currentProductPrice;
    return acc;
  }, 0);
};
