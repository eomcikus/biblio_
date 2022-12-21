from flask import Blueprint, jsonify
from ..models import Book, db, User
from ..forms import ReviewForm 
from flask_login import login_required

book_routes = Blueprint('books', __name__)

@book_routes.route('/')
def get_all_books():
    """
    Query all books and return them as a list of dictionaries
    """
    books = Book.query.all()
    print(books, '-----------------------------------------------')
    return {'books': [book.to_dict() for book in books]}