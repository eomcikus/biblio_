from flask import Blueprint, jsonify, request
from ..models import Review, db, User
from ..forms import ReviewForm 
from flask_login import login_required
from .auth_routes import validation_errors_to_error_messages

review_routes = Blueprint('reviews', __name__)

# @review_routes.route('/books/<int:id>/reviews')
# def get_reviews_by_id(book_id):
#     """ query all reviews and return them in a list of dictionaries ordered by id num
#     """
#     print('BBBBBBBBBBBBBBBBBBBBBBB')
#     book_reviews = Review.query.filter(Review.book_id == book_id)
#     # book_reviews = Review.query.get(id)
#     return {'book_reviews': [review.to_dict for review in book_reviews]}

# @review_routes.route('/add', methods=['POST'])
# @login_required
# def add_review():
#     form = ReviewForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         new_review = Review(
#             review = form.data['review'],
#             stars = form.data['stars'],
#             book_id = form.data['book_id'],
#             user_id = form.data['user_id'],
#         )
#         db.session.add(new_review)
#         db.session.commit()
#         return new_review.to_dict()
#     return {'errors': validation_errors_to_error_messages(form.errors)}
