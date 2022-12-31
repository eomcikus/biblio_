from flask import Blueprint, jsonify, request, json
from ..models import Book, db, User, Review
from ..forms import ReviewForm, BookForm 
from flask_login import login_required
from .auth_routes import validation_errors_to_error_messages
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

@book_routes.route('/edit/<id>', methods=['PUT'])
@login_required
def edit_book(id):
    form = BookForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        book_to_edit = json.loads(request.data.decode('UTF-8'))
        book = Book.query.get(id)
        book.title = book_to_edit['title']
        book.author = book_to_edit['author']
        book.summary = book_to_edit['summary']
        book.author_about = book_to_edit['author_about']
        book.thumbnail = book_to_edit['thumbnail']
        db.session.commit()
        updatedbook = book.to_dict()
        print('--------------------', updatedbook)
        return updatedbook


@book_routes.route('/delete/<id>', methods=['DELETE'])
@login_required
def delete_a_book(id):
    book_to_delete = Book.query.get(id)

    db.session.delete(book_to_delete)
    db.session.commit()
    return jsonify({'message': 'Book successfully deleted.'})

@book_routes.route('/<int:id>/reviews', methods=['GET', 'POST'])
def get_reviews_by_id(id):
    """ query all reviews and return them in a list of dictionaries ordered by id num
    """
    # print('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
    book_reviews = Review.query.filter(Review.book_id == id)
    # print('-----------------------------', book_reviews)
    return {'book_reviews': [review.to_dict() for review in book_reviews]}

@book_routes.route('/reviews/add', methods=['POST'])
@login_required
def add_review():
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_review = Review(
            review = form.data['review'],
            stars = form.data['stars'],
            book_id = form.data['book_id'],
            user_id = form.data['user_id'],
        )
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}

@book_routes.route('/reviews/<id>/delete', methods=['DELETE'])
@login_required
def delete_review(id):
    review_to_delete = Review.query.get(id)
    db.session.delete(review_to_delete)
    db.session.commit()
    return {'message': 'Review successfully deleted'}

@book_routes.route('/reviews/edit/<id>', methods=['PUT'])
@login_required
def edit_review(id):
    form = Review.Form()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review_to_edit = json.loads(request.data.decode('UTF-8'))
        review = Review.query.get(id)
        review.review = review_to_edit['review']
        review.stars = review_to_edit['stars']
        review.user_id = review_to_edit['user_id']
        review.book_id = review_to_edit['book_id']
        db.session.commit()
        updatedreview = review.to_dict()
        print('--------------------', updatedreview)
        return updatedreview