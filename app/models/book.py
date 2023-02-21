from .db import db, environment, SCHEMA, add_prefix_for_prod
# from ..models import Review

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
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    
    users = db.relationship('User', back_populates='books')
    reviews = db.relationship('Review', back_populates='books', cascade='all' )
    shelves = db.relationship('Shelf', secondary='book_shelf', back_populates='books')
    tags = db.relationship('Tag', secondary='book_tag', back_populates='books')
    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "author": self.author,
            "summary": self.summary,
            "author_about": self.author_about,
            "thumbnail": self.thumbnail,
            "user_id": self.user_id
            # "user": self.user
            # "star_avg": self.star_avg
        }
    # def star_avg(id):
    #     reviews = Review.query.filter(id == Review.book_id).all()
    #     if reviews == 0:
