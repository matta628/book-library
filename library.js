const myLibrary = [];

class Book {
  static uniqueID = 0;

  #colors = ['#012908', '#ec8e00', '#820100', '#03285c', '#3c1460'];

  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = +pages;
    this.read = read;
    this.id = this.uniqueID++;
    const randomIndex = Math.floor(Math.random() * this.#colors.length);
    this.color = this.#colors[randomIndex];
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function removeBookByID(id) {
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].id === id) {
      myLibrary.splice(i, 1);
      return;
    }
  }
}

function appendRemoveButtonChild(bookCard) {
  const removeButton = document.createElement('div');
  removeButton.classList.add('remove', 'hide');
  const removeSVG = document.createElement('img');
  removeSVG.src = 'icon/delete.svg';
  removeSVG.alt = 'remove icon';
  removeButton.addEventListener('click', () => {
    bookCard.parentElement.removeChild(bookCard);
    const classList = bookCard.className.split(' ');
    for (let i = 0; i < classList.length; i++) {
      if (classList[i][0] === 'c') {
        const id = +classList[i].split('-')[1];
        removeBookByID(id);
      }
    }
  });
  removeButton.appendChild(removeSVG);
  bookCard.appendChild(removeButton);
}

function createBookCard(book) {
  const bookCard = document.createElement('div');
  bookCard.classList.add('book-card');
  bookCard.style.backgroundColor = book.color;
  appendRemoveButtonChild(bookCard);

  const title = document.createElement('div');
  title.textContent = book.title;
  title.classList.add('title');
  bookCard.appendChild(title);

  const author = document.createElement('div');
  author.textContent = book.author;
  author.classList.add('author');
  bookCard.appendChild(author);

  const pages = document.createElement('div');
  pages.textContent = `${book.pages} pp.`;
  pages.classList.add('pages');
  bookCard.appendChild(pages);

  const read = document.createElement('button');
  read.textContent = (book.read) ? 'Read' : 'Not Read';
  read.classList.add('read');
  bookCard.appendChild(read);
  read.addEventListener('click', () => {
    const bookId = +read.parentElement.className.split(' ')[1].split('-')[1];
    let bookObj = myLibrary[0];
    for (let i = 0; i < myLibrary.length; i++) {
      if (myLibrary[i].id === bookId) {
        bookObj = myLibrary[i];
      }
    }
    bookObj.read = !bookObj.read;
    read.textContent = (book.read) ? 'Read' : 'Not Read';
  });
  return bookCard;
}

function addBookAsCard(book) {
  const bookSection = document.querySelector('.books');
  const bookCard = createBookCard(book);
  bookCard.classList.add(`card-${book.id}`);
  bookSection.appendChild(bookCard);
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    addBookAsCard(myLibrary[i]);
  }
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
  displayBooks();
}

const addBookButton = document.querySelector('#add-book-button');
const cancelButton = document.querySelector('.cancel-add');
const formContainer = document.querySelector('#hidden-form');
addBookButton.addEventListener('click', () => {
  formContainer.classList.remove('hide');
  cancelButton.classList.remove('hide');
});
cancelButton.addEventListener('click', () => {
  formContainer.classList.add('hide');
  cancelButton.classList.add('hide');
});

const form = document.getElementById('form');
function getFormInput(event) {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const readRadio = document.getElementsByName('read');
  let readValue = false;
  if (readRadio[0].id === 'already-read' && readRadio[0].checked) {
    readValue = true;
  }

  const book = new Book(title, author, pages, readValue);
  addBookToLibrary(book);
  addBookAsCard(book);
  event.preventDefault();
}
form.addEventListener('submit', getFormInput);

main();

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    formContainer.classList.add('hide');
    cancelButton.classList.add('hide');
  }
});
