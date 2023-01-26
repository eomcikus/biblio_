from .db import db, environment, SCHEMA, add_prefix_for_prod

book_shelf = db.Table(
    "book_shelf",
    db.Model.metadata,
    db.Column("shelf_id", db.Integer, db.ForeignKey(add_prefix_for_prod('shelves.id')), primary_key=True),
    db.Column("book_id", db.Integer, db.ForeignKey(add_prefix_for_prod('books.id')), primary_key=True)
)

if environment == "production":
    book_shelf.schema = SCHEMA