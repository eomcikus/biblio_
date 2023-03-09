from .db import db, environment, SCHEMA, add_prefix_for_prod

book_tag = db.Table(
    'book_tag', 
    db.Model.metadata,
    db.Column("tag_id", db.Integer, db.ForeignKey(add_prefix_for_prod('tags.id')), primary_key=True),
    db.Column("book_id", db.Integer, db.ForeignKey(add_prefix_for_prod('books.id')), primary_key=True)
)


if environment == "production":
    book_tag.schema = SCHEMA