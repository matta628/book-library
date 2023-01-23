const myLibrary = [];

function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
}

function addBookToLibrary(book) {
  // take user input

  // create book object

  myLibrary.push(book);
}

function main() {
  const catch22 = new Book(
    'Catch 22',
    'Joseph Heller',
    450,
    false,
  );
  addBookToLibrary(catch22);
}

main();
