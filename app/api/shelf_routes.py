from flask import Blueprint, jsonify, request, json
from ..models import Shelf, db, Book, book_shelf
from ..forms import shelf_form
from flask_login import login_required, current_user
from .auth_routes import validation_errors_to_error_messages
from sqlalchemy.orm import joinedload
shelf_routes = Blueprint('/shelves', __name__)

@shelf_routes.route('/')
def get_all_shelves():
    shelves = Shelf.query.all()
    # print('books---------------------------', books)
    return {'shelves': [shelf.to_dict() for shelf in shelves]}

@shelf_routes.route('/user')
@login_required
def get_shelves_of_current_user():
    shelves = Shelf.query.filter(Shelf.user_id == current_user.id)
    return {'shelves': shelf.to_dict() for shelf in shelves }

@shelf_routes.route('/<bookId>', methods=['POST'])
@login_required
def add_to_shelf(bookId):
    shelves = Shelf.query.filter(Shelf.user_id == current_user.id).first()
    book = Book.query.filter(Book.id == bookId).first()
    print ('bookId========================' , bookId)
    print('book----------------------------------', book)
    print ('shelf =-=-=-=-=-=-=-=-=-=-=-=-=-', shelves)
    # insert_stmt = book_shelf.insert().values(book_id=bookId, shelf_id=shelves.id)
    # book_shelf.insert().values(shelf_id=shelves.id)
    # db.session.add(insert_stmt)
    shelves.books.append(
        book
    )
    # new_bookshelf = book_shelf.append({
    #     "shelf_id": shelves.id,
    #     "book_id": book.id
    # })
    # db.session.add(new_bookshelf)
    db.session.commit()
    return {'shelves': shelves.to_dict()}
    # need book and shelf id's
    # new book_shelf?
    # db.session.add(newshelf)
    #db.session.commit
    #return the new bookshelf?

