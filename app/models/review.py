from .db import db, add_prefix_for_prod

class Review(db.Model):
    __tablename__ = 'reviews'
    id = db.Column(db.Integer, primary_key=True)
    review = db.Column(db.String(4000), nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('books.id')), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)

    book = db.relationship('Book', back_populates='reviews')
    user = db.relationship('User', back_populates='reviews')

def to_dict(self):
    return {
        "id": self.id,
        "title": self.title,
        "stars": self.stars,
        "book_id": self.book_id,
        "user_id": self.user_id
    }