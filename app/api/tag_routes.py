from flask import Blueprint, jsonify, request, json
from ..models import Tag, db, Book, book_tag
from flask_login import login_required, current_user

tag_routes = Blueprint('tags', __name__)

@tag_routes.route('/bookId')
def get_tags_of_current_book():
    tags = Tag.query.all()
    print('---------------------------', tags)
    if tags.length:
        tag_of_books = []

    for tag in tags:
        one_book_list = [book.to_dict() for book in tag.books]
        one_tag_of_books = {tag.id: one_book_list}
        tag_of_books.append(one_tag_of_books)
    return jsonify(tag_of_books)
