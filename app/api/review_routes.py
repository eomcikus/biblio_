from flask import Blueprint, jsonify
from ..models import Review, db, User
# from ..forms import ReviewForm 
from flask_login import login_required

review_routes = Blueprint('reviews', __name__)

@review_routes.route('/<book_id>')
def get_reviews_by_id(book_id):
    """ query all reviews and return them in a list of dictionaries ordered by id num
    """
    book_reviews = Review.query.filter(Review.book_id == book_id)
    return {'book_reviews': [review.to_dict for review in book_reviews]}