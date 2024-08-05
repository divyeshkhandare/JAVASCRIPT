class Book {
  #price;
  #rentalPrice;
  #copiesAvailable;
  #rentedCopies;

  constructor(title, author, price, rentalPrice, copiesAvailable) {
    this.title = title;
    this.author = author;
    this.#price = price;
    this.#rentalPrice = rentalPrice;
    this.#copiesAvailable = copiesAvailable;
    this.#rentedCopies = 0;
  }
  getPrice() {
    return this.#price;
  }

  getRentalPrice() {
    return this.#rentalPrice;
  }

  getCopiesAvailable() {
    return this.#copiesAvailable;
  }

  getRentedCopies() {
    return this.#rentedCopies;
  }

  setPrice(price) {
    this.#price = price;
  }

  setRentalPrice(rentalPrice) {
    this.#rentalPrice = rentalPrice;
  }

  setCopiesAvailable(copiesAvailable) {
    this.#copiesAvailable = copiesAvailable;
  }

  setRentedCopies(rentedCopies) {
    this.#rentedCopies = rentedCopies;
  }
  buyBook(book) {
    if (this.#copiesAvailable >= book) {
      this.#copiesAvailable -= book;
      return `You have bought ${book} copies.\nTotal cost is ${
        this.#price * book
      }.`;
    } else {
      return "Sorry, you don't have enough copies.";
    }
  }

  rentBook(book) {
    if (this.#copiesAvailable >= book) {
      this.#copiesAvailable -= book;
      this.#rentedCopies += book;
      return `You have rented ${book} copies.\nTotal cost is ${
        this.#rentalPrice * book
      }.`;
    } else {
      return "Sorry, you don't have enough copies.";
    }
  }

  returnBook(book) {
    if (this.#rentedCopies >= book) {
      this.#rentedCopies -= book;
      this.#copiesAvailable += book;
      return `You have returned ${book} rented copies. Available copies: ${
        this.#copiesAvailable
      }`;
    } else {
      return `You cannot return more than rented Copies. Your Total Rented Copies ${
        this.#rentedCopies
      }`;
    }
  }

  checkAvailability() {
    return this.#copiesAvailable;
  }

  displayBookInfo() {
    if (
      this.#copiesAvailable >= 0 &&
      this.#price >= 0 &&
      this.#rentalPrice >= 0
    ) {
      return `Title: ${this.title}\nAuthor: ${this.author}\nPrice: ₹${
        this.#price
      }\nRental Price: ₹${this.#rentalPrice}\nCopies Available: ${
        this.#copiesAvailable
      }\nRented Copies: ${this.#rentedCopies}`;
    } else {
      return `Nagative Numbers Not Allowed`;
    }
  }
}

let Book1 = new Book("Rich Dad, Poor Dad", "Robert T. Kiyosaki", 300, 250, 100);

console.log(Book1.buyBook(50));

console.log(Book1.rentBook(5));

console.log(Book1.returnBook(5));

console.log(Book1.checkAvailability());

console.log(Book1.displayBookInfo());
