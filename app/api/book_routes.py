from flask import Blueprint, jsonify, request, json
from ..models import Book, db, User, Review, Tag
from ..forms import ReviewForm, BookForm 
from flask_login import login_required, current_user
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
    # reviews = Review.query.filter(Review.book_id == id).all()
    # # go through all reviews and key into review.star
    # # add review.star += total
    # # 
    # review_length = len(reviews)
    # avg = 0
    # for review in reviews:
    #     avg += review.stars
    #     print(avg) 
    # book.star_avg = avg/review_length

    return {'book': book.to_dict()}

@book_routes.route('/add', methods=['POST'])
@login_required
def add_a_book():
    form = BookForm()
    
    form['csrf_token'].data = request.cookies['csrf_token']
    user = current_user.id

    form['user_id'].data = user
    if form.validate_on_submit():
        new_book = Book(
            title = form.data['title'],
            author = form.data['author'],
            summary = form.data['summary'],
            author_about = form.data['author_about'],
            thumbnail = form.data['thumbnail'],
            user_id = user
        )
        db.session.add(new_book)
        db.session.commit()
        return new_book.to_dict()

@book_routes.route('/edit/<id>/', methods=['PUT'])
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
        book.user_id = book_to_edit['user_id']
        db.session.commit()
        updatedbook = book.to_dict()

        return updatedbook


@book_routes.route('/delete/<id>', methods=['DELETE'])
@login_required
def delete_a_book(id):
    book_to_delete = Book.query.get(id)

    db.session.delete(book_to_delete)
    db.session.commit()
    return jsonify({'message': 'Book successfully deleted.'})
# @book_routes.route('/reviews', methods=["GET"])
# def get_all_reviews():
#     """
#     query all reviews and return them in a list of dictionaries
#     """
#     all_reviews = Review.query.all()
#     return {all_reviews: [review.to_dict() for review in all_reviews]}

@book_routes.route('/<int:id>/reviews', methods=['GET', 'POST'])
def get_reviews_by_id(id):
    """ query all reviews and return them in a list of dictionaries ordered by id num
    """
    book_reviews = Review.query.filter(Review.book_id == id)
    return {'book_reviews': [review.to_dict() for review in book_reviews]}

@book_routes.route('/<id>/reviews/add', methods=['POST'])
@login_required
def add_review(id):
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
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review_to_edit = json.loads(request.data.decode('UTF-8'))
        review = Review.query.get(id)
        # review.id = review_to_edit['id']
        review.review = review_to_edit['review']
        review.stars = review_to_edit['stars']
        review.user_id = review_to_edit['user_id']
        review.book_id = review_to_edit['book_id']
        db.session.commit()
        updatedreview = review.to_dict()

        return updatedreview
    return {'errors': validation_errors_to_error_messages(form.errors)}

@book_routes.route('/reviews/current', methods=['GET'])
@login_required
def get_review_by_user_id():
    reviews = Review.query.all()

@book_routes.route('/<id>/tags')
def get_tags_of_current_book(id):
    tags = Tag.query.all()
    print('---------------------------', tags)
    return