from flask import Blueprint, jsonify, request, json
from ..models import Tag, db, Book, book_tag
from flask_login import login_required, current_user

tag_routes = Blueprint('tags', __name__)

@tag_routes.route('/bookId')
def get_tags_of_current_book():
    tags = Tag.query.filter()