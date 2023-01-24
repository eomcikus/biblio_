from app.models import db, book_shelf, environment, SCHEMA

def seed_book_shelf():
    shelf1 = book_shelf(
        shelf_id = 1,
        book_id = 2,
        book_id = 3,
        book_id = 4,
    )
    shelf2 = book_shelf(
        shelf_id = 1,
        book_id = 4
    )
    shelf3 = book_shelf(
        shelf_id = 1,
        book_id = 6
    )
    db.session.add(shelf1)
    db.session.add(shelf2)
    db.session.add(shelf3)
    db.session.commit()
def undo_book_shelves():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.book_shelf RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM book_shelf")

    db.session.commit()
