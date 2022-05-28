console.log("************** DELIVERABLE 04 *********************");

interface Book {
  title: string;
  isRead: boolean;
}

const books: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

/* Function which evaluate if a book object has been read */
const isBookRead = (books: Book[], titleToSearch: string): boolean =>
  books.find((book) => book.title.toLowerCase() === titleToSearch.toLowerCase())
    ?.isRead ?? false;

// console.log("** IS BOOK READ **");
// console.log("Books: ", books);
// console.log("Devastación: ", isBookRead(books, "Devastación")); // true
// console.log(
//   "Canción de hielo y fuego: ",
//   isBookRead(books, "Canción de hielo y fuego")
// ); // false
// console.log(
//   "Los Pilares de la Tierra: ",
//   isBookRead(books, "Los Pilares de la Tierra")
// ); // false
// console.log("----------------------------------");

