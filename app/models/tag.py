from .db import db, environment, SCHEMA, add_prefix_for_prod

class Tag(db.Model):
    __tablename__ = 'tags'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    books = db.relationship('Book', secondary='book_tag', back_populates='tags')

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "books": [
                {'bookId': book.id, 
                'title': book.title, 
                'author': book.author, 
                'summary': book.summary, 
                'thumbnail': book.thumbnail} for book in self.books]
        }