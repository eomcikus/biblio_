from app.models import db, book_shelf, Shelf, Book, environment, SCHEMA

def seed_book_shelves():
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
    eleventh_book = Book.query.get(11)
    twelfth_book = Book.query.get(12)
    thirteenth_book = Book.query.get(13)
    fourteenth_book = Book.query.get(14)
    fifteenth_book = Book.query.get(15)
    kids = Shelf.query.get(1)
    wordless = Shelf.query.get(2)
    thinkers = Shelf.query.get(3)
    animals = Shelf.query.get(4)

    kids.books.append(first_book)
    kids.books.append(second_book)
    kids.books.append(sixth_book)
    kids.books.append(seventh_book)
    kids.books.append(eleventh_book)
    kids.books.append(fifteenth_book)
    wordless.books.append(sixth_book)
    wordless.books.append(seventh_book)

    thinkers.books.append(third_book)
    thinkers.books.append(fourth_book)
    thinkers.books.append(fifth_book)
    thinkers.books.append(eighth_book)
    thinkers.books.append(thirteenth_book)
    thinkers.books.append(fourteenth_book)
    animals.books.append(first_book)
    animals.books.append(second_book)
    animals.books.append(eighth_book)
    animals.books.append(ninth_book)
    animals.books.append(tenth_book)
    animals.books.append(eleventh_book)
    animals.books.append(twelfth_book)
    db.session.commit()

def undo_book_shelves():

    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.book_shelf RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM book_shelf")

    db.session.commit()