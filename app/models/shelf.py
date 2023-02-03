from .db import db, environment, SCHEMA, add_prefix_for_prod

class Shelf(db.Model):
    __tablename__ = 'shelves'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    description = db.Column(db.String(2000), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)

    books = db.relationship('Book', back_populates='shelves')
    users = db.relationship('User', back_populates='shelves')
    def to_dict(self):
        return {
            "id": self.id,
            "name": self.title,
            "description": self.description,
            "user_id": self.user_id,

        }