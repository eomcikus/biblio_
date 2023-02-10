from app.models import db, Shelf, environment, SCHEMA

def seed_shelves():
    kids = Shelf(
        name="Favorite Children's Titles",
        user_id=1

    )
    wordless = Shelf(
        name="Wordless Picture Books",
        user_id=2
    )
    thinkers = Shelf(
        name="To Read",
        user_id=3
    )
    animals = Shelf(
        name="To Be Read",
        user_id=4
    )
    random = Shelf(
        name="To Be Read",
        user_id=5
    )
    db.session.add(kids)
    db.session.add(wordless)
    db.session.add(thinkers)
    db.session.add(animals)
    db.session.add(random)
    db.session.commit()
def undo_shelves():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.shelves RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM shelves")

    db.session.commit()