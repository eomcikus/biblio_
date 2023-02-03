from app.models import db, Shelf, environment, SCHEMA

def seed_shelves():
    shelf_1 = Shelf(
        name='To be read',
        description='books I want to read with my family',
        user_id = 1
    )
    shelf_2 = Shelf(
        name='Books to Read',
        description='Books to read with my nephew',
        user_id=2
    )
    shelf_3 = Shelf(
        name='Books we love',
        description='Books we enjoy as a family',
        user_id=3
    )


    db.session.add(shelf_1)
    db.session.add(shelf_2)
    db.session.add(shelf_3)
    db.session.commit()
def undo_shelves():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.shelves RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM shelves")

    db.session.commit()