from flask import Blueprint, jsonify, request, json
from ..models import Shelf, db
from ..forms import shelf_form
from flask_login import login_required, current_user
from .auth_routes import validation_errors_to_error_messages

shelf_routes = Blueprint('shelf', __name__)

@shelf_routes.route('/')
def get_all_shelves():
    shelves = Shelf.query.all()
    return {'shelves': [shelf.to_dict() for shelf in shelves]}

@shelf_routes.routes('/user')
@login_required
def get_shelves_of_current_user():
    shelves = Shelf.query.filter(Shelf.user_id == current_user.id)
    return {'shelves': [shelf.to_dict() for shelf in shelves]}
