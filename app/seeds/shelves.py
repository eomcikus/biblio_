from app.models import db, Shelf, environment, SCHEMA

def seed_shelves():
    kids = Shelf(
        name="Favorite Children's Titles",
        description="Some of our most well-loved children's titles",
        user_id=1

    )
    wordless = Shelf(
        name="Wordless Picture Books",
        description="Wordless picture books are a great way to practice storytelling by letting your young reader take over. Ask them to organize their story into beginning, middle, and end.",
        user_id=2
    )
    thinkers = Shelf(
        name="Books to Make You Think",
        description="These books will have you and the readers you share them with scratching your head",
        user_id=3
    )
    animals = Shelf(
        name="To Be Read",
        description="The perfect collection for the young animal lover in your life",
        user_id=4
    )
    random = Shelf(
        name="To Be Read",
        description="Books to read with my kids",
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