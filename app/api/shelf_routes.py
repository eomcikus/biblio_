from flask import Blueprint, jsonify, request, json
from ..models import Shelf, db, Book
from ..forms import shelf_form
from flask_login import login_required, current_user
from .auth_routes import validation_errors_to_error_messages

shelf_routes = Blueprint('/shelves', __name__)

@shelf_routes.route('/')
@login_required
def get_shelf_by_user():
    """get books on shelf by user"""
    # shelves = Shelf.query.get(Shelf.user_id == current_user.id)

    # print('AAAAAAAAAAAAAA', shelves)
    books = Book.query.filter(Book.shelf_id == current_user.id)

    return  [book.to_dict() for book in books]




# @shelf_routes.routes('/add')
# @login_required
