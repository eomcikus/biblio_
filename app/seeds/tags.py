from app.models import db, Tag, environment, SCHEMA

def seed_tags():
    fantasy = Tag(
        name='Fantasy'
    )
    realistic = Tag(
        name='Realistic Fiction'
    )
    scifi = Tag(
        name='Science Fiction'
    )
    nonfiction = Tag(
        name='Non Fiction'
    )
    readaloud = Tag(
        name='Great for Read-Alouds!'
    )
    adventure = Tag(
        name='Adventures!'
    )
    reluctant = Tag(
        name='Reluctant readers'
    )
    beginning = Tag(
        name='Beginning Reader'
    )
    wordless = Tag(
        name='Wordless Picture Book'
    )

    db.session.add(fantasy)
    db.session.add(realistic)
    db.session.add(scifi)
    db.session.add(nonfiction)
    db.session.add(readaloud)
    db.session.add(adventure)
    db.session.add(reluctant)
    db.session.add(beginning)
    db.session.add(wordless)
    db.session.commit()
    
def undo_tags():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.tags RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM tags")

    db.session.commit()