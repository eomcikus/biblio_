from .db import db, environment, SCHEMA


class Book(db.Model):
    __tablename__ = 'books'
    if environment == "production":
      __table_args__ = {'schema': SCHEMA}
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    author = db.Column(db.String(75), nullable=False)
    summary = db.Column(db.String(5000))
    author_about = db.Column(db.String(5000))
    thumbnail = db.Column(db.String(5000))

    reviews = db.relationship('Review', back_populates='books')

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "author": self.author,
            "summary": self.summary,
            "author_about": self.author_about,
            "thumbnail": self.thumbnail
        }
