from app.models import db, book_shelf, Shelf, Book, environment, SCHEMA


first_book = Book.query.get(1)
second_book = Book.query.get(2)
third_book = Book.query.get(3)
fourth_book = Book.query.get(4)
fifth_book = Book.query.get(5)
sixth_book = Book.query.get(6)
seventh_book = Book.query.get(7)
eighth_book = Book.query.get(8)
ninth_book = Book.query.get(9)
tenth_book = Book.query.get(10)
kids = Shelf.query.get(1)
wordless = Shelf.query.get(2)
thinkers = Shelf.query.get(3)
animals = Shelf.query.get(4)

kids.book_shelf.appends(first_book)
kids.book_shelf.appends(second_book)
wordless.book_shelf.appends(sixth_book)
wordless.book_shelf.appends(seventh_book)
