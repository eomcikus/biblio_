from flask import Blueprint, jsonify, request
from ..models import Book, db, User
from ..forms import ReviewForm, BookForm 
from flask_login import login_required

book_routes = Blueprint('books', __name__)

@book_routes.route('/')
def get_all_books():
    """
    Query all books and return them as a list of dictionaries
    """
    books = Book.query.all()
    return {'books': [book.to_dict() for book in books]}

@book_routes.route('/<id>')
def get_one_book(id):
    """
    Query all books and return one book as a dictionary
    """
    book = Book.query.get(id)
    return {'book': book.to_dict()}

@book_routes.route('/add', methods=['POST'])
@login_required
def add_a_book():
    form = BookForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_book = Book(
            title = form.data['title'],
            author = form.data['author'],
            summary = form.data['summary'],
            author_about = form.data['author_about'],
            thumbnail = form.data['thumbnail']
        )
        db.session.add(new_book)
        db.session.commit()
        return new_book.to_dict()

@book_routes.route('/<id>', methods=['DELETE'])
@login_required
def delete_a_book(id):
    book_to_delete = Book.query.get(id)
    db.session.delete(book_to_delete)
    db.session.commit()
    return 'message: Book successfully deleted.'
