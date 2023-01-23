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
    453,
    false,
  );
  addBookToLibrary(catch22);
  const oxygenThief = new Book(
    'Diary of an Oxygen Thief',
    'Anonymous',
    143,
    true,
  );
  addBookToLibrary(oxygenThief);
  const mathWithoutNums = new Book(
    'Math Without Numbers',
    'Milo Beckman',
    224,
    true,
  );
  addBookToLibrary(mathWithoutNums);
  const dorianGray = new Book(
    'The Picture of Dorian Gray',
    'Oscar Wilde',
    272,
    true,
  );
  addBookToLibrary(dorianGray);
  const hitchhikersGuide = new Book(
    "The Hitchhiker's Guide to the Galaxy #1",
    'Douglas Adams',
    193,
    true,
  );
  addBookToLibrary(hitchhikersGuide);
  const songOfAchilles = new Book(
    'The Song of Achilles',
    'Madeline Miller',
    378,
    true,
  );
  addBookToLibrary(songOfAchilles);
  const towerOfNero = new Book(
    'The Tower of Nero',
    'Rick Riordan',
    410,
    true,
  );
  addBookToLibrary(towerOfNero);
  const nineteen84 = new Book(
    '1984',
    'George Orwell',
    328,
    true,
  );
  addBookToLibrary(nineteen84);
  const oneHundredYears = new Book(
    'Cien Años de Soledad',
    'Gabriel García Márquez',
    417,
    true,
  );
  addBookToLibrary(oneHundredYears);
}

main();
