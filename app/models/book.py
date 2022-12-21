from .db import db, environment, SCHEMA


class Book(db.Model):
    __tablename__ = 'books'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    author = db.Column(db.String(75), nullable=False)
    summary = db.Column(db.String(5000))
    author_about = db.Column(db.String(5000))
    thumbnail = db.Column(db.String(5000))

def to_dict(self):
    return {
        "id": self.id,
        "title": self.title,
        "author": self.author,
        "summary": self.summary,
        "author_about": self.author_about,
        "thumbnail": self.thumbnail
    }
