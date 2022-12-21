from app.models import db, Review, environment, SCHEMA

def seed_reviews():
    r_1 = Review(
        review="Corduroy is one of my absolute favorite books of all time. It's such a sweet story, and kids of all ages would enjoy this classic!",
        stars=4.5,
        book_id=1,
        user_id=2
    )
    r_2 = Review(
        review="Caps for Sale is a great choice for an early reader. The repetitive nature of the story will make it easy for young kids to follow along for an interactive read!",
        stars=4.7,
        book_id=2,
        user_id=1
    )
    r_3 = Review(
        review="Maniac Magee is an excellent book for a middle school-aged child. There are many different themes that could be discussed at great length as a read-aloud. Maniac is an amazing main character.",
        stars=4.2,
        book_id=3,
        user_id=3
    )
    r_4 = Review(
        review="This is a great book for upper elementary or middle school reluctant readers. Students will be on the edge of their seat to see what happens to Stanley and everyone else at Camp Green Lake.",
        stars=4.3,
        book_id=4,
        user_id=3
    )
    r_5 = Review(
        review="Tuck Everlasting is a great read aloud book. Kids will be excited to discuss the difficulties the Tucks are having as a family, and decide what's right and wrong.",
        stars=4.4,
        book_id=5,
        user_id=2
    )
    r_6 = Review(
        review="Even though the Snowman is wordless, it still makes a great book to read together. Let your young child make up their own story. Encourage them to explain it from beginning, middle, to end.",
        stars=4.0,
        book_id=6,
        user_id=4
    )
    r_7 = Review(
        review="This is a great wordless book to look through with a reluctant reader. Encourage them to read the story by telling you a story based on the pictures they see. You'll both be lost in the amazing pictures drawn in this book",
        stars=4.1,
        book_id=7,
        user_id=3
    )
    r_8 = Review(
        review="The Golden Compass is a great recommendation for the fantasy lover in your life- be they young or an adult. Get lost in the dark world with Lyra and the daemons.",
        stars=3.9,
        book_id=8,
        user_id=2
    )
    r_9 = Review(
        review="Because of Winn-Dixie is a great choice for the animal lover in your life. They'll be able to relate to Opal's love of her newfound friend, Winn-Dixie",
        stars=4.0,
        book_id=9,
        user_id=5
    )
    r_10 = Review(
        review="The One and Only Ivan is a great read aloud for upper elementary students. Read it together and talk through new vocabulary words. Practice empathy by empathizing with Ivan.",
        stars=4.5,
        book_id=10,
        user_id=1
    )
    r_11 = Review(
        review="Dragons Love Tacos is an amazing book to read to babies all the way to early elementary school. It's a fun, repetitive book the whole family will enjoy!",
        stars=4.8,
        book_id=11,
        user_id=4
    )
    r_12 = Review(
        review="Pax is another great book to read aloud and practice empathizing with Pax and Keith. How can they help each other from afar?",
        stars=4.1,
        book_id=12,
        user_id=3
    )
    r_13 = Review(
        review="Fish in a Tree is an amazing read aloud. Follow Ally through her struggles in school and see what the magic of a great teacher and hard work making all the difference. This book is a great reminder that all minds learn differently!!",
        stars=4.5, 
        book=13,
        user_id=2
    )
    r_14 = Review(
        review="Escape from Mr. Lemoncello's library is the ultimate wild ride for the gamer in your life! Help the characters solve the puzzles to escape before it's too late.",
        stars=4.2,
        book=14,
        user_id=3
    )
    r_15 = Review(
        review="The Not So Quiet Library is a fun book for younger kids!",
        stars=4.0,
        book=15,
        user_id=4  
    )
    db.session.add(r_1)
    db.session.add(r_2)
    db.session.add(r_3)
    db.session.add(r_4)
    db.session.add(r_5)
    db.session.add(r_6)
    db.session.add(r_7)
    db.session.add(r_8)
    db.session.add(r_9)
    db.session.add(r_10)
    db.session.add(r_11)
    db.session.add(r_12)
    db.session.add(r_13)
    db.session.add(r_14)
    db.session.add(r_15)


def undo_books():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM reviews")

    db.session.commit()