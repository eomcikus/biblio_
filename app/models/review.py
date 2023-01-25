from .db import db, add_prefix_for_prod, environment, SCHEMA

class Review(db.Model):
    __tablename__ = 'reviews'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    review = db.Column(db.String(4000), nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('books.id')), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)

    books = db.relationship('Book', back_populates='reviews')
    users = db.relationship('User', back_populates='reviews')

    def to_dict(self):
        return {
            "id": self.id,
            "review": self.review,
            "stars": self.stars,
            "book_id": self.book_id,
            "user_id": self.user_id,
        }