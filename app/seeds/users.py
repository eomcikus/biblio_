from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    maniac = User(
        username='maniac', email='maniac@sle.io', password='password')
    harry = User(
        username='harry', email='harry@hogwarts.io', password='password')
    nancy = User(
        username='nancy', email='nancy@nancydrewpi.io', password='password')
    opal = User(
        username='opal', email='opal@hermanwblocklibrary.io', password='password')
    
    db.session.add(demo)
    db.session.add(maniac)
    db.session.add(harry)
    db.session.add(nancy)
    db.session.add(opal)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")
        
    db.session.commit()