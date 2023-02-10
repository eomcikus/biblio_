from .db import db, environment, SCHEMA, add_prefix_for_prod

class Shelf(db.Model):
    __tablename__ = 'shelves'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    
    books = db.relationship('Book', secondary='book_shelf', back_populates='shelves')
    users = db.relationship('User', back_populates='shelves')
    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "user_id": self.user_id,
            "books": [
                {'bookId': book.id, 
                'title': book.title, 
                'author': book.author, 
                'summary': book.summary, 
                'thumbnail': book.thumbnail} for book in self.books]
        }

        # def to_dict(self):
#         return {
#             "id": self.id,
#             "title": self.title,
#             "content": self.content,
#             'updatedOn': self.updated_at,
#             'books': [{'departmentId': department.id} for department in self.departments]
#         }
