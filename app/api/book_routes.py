from flask import Blueprint, jsonify, request, json
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

@book_routes.route('<id>/edit', methods=['PUT'])
@login_required
def edit_book():
    form = BookForm()
    if form.validate_on_submit():
        book_to_edit = json.loads(request.data.decode('UTF-8'))
        book = Book.query.get(book_to_edit['id'])
        book.title = book_to_edit['title']
        book.author = book_to_edit['author']
        book.summary = book_to_edit['summary']
        book.author_about = book_to_edit['author_about']
        book.thumbnail = book_to_edit['thumbnail']
        db.session.commit()
        updatedbook = book.to_dict()
        return updatedbook


@book_routes.route('/delete/<id>', methods=['DELETE'])
# @login_required
def delete_a_book(id):
    book_to_delete = Book.query.get(id)
    print('------------------------->', book_to_delete)
    db.session.delete(book_to_delete)
    db.session.commit()
    return {'message: Book successfully deleted.'}
