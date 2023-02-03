from flask import Blueprint, jsonify, request, json
from ..models import Shelf, db, Book
from ..forms import shelf_form
from flask_login import login_required, current_user
from .auth_routes import validation_errors_to_error_messages

shelf_routes = Blueprint('shelves', __name__)

@shelf_routes.route('/')
def get_shelf_by_user():
    # shelves = Shelf.query.
    # return {'shelves': [shelf.to_dict() for shelf in shelves]}
    pass

@shelf_routes.route('/user')
@login_required
def get_shelves_of_current_user():
    shelves = Shelf.query.filter(Shelf.user_id == current_user.id)
    return {'shelves': [shelf.to_dict() for shelf in shelves]}

# @shelf_routes.routes('/add')
# @login_required
