from .db import db, environment, SCHEMA

book_shelf = db.Table(
    "book_shelf",
    db.Model.metadata,
    db.Column("shelf_id", db.Integer, db.ForeignKey('shelves.id'), primary_key=True),
    db.Column("book_id", db.Integer, db.ForeignKey('books.id'), primary_key=True)
)