from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired
from app.models import Book

class BookForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    author = StringField('Author', validators=[DataRequired()])
    summary = StringField('Summary', validators=[DataRequired()])
    author_about = StringField('About the Author', validators=[DataRequired()])
    thumbnail = StringField('Thumbnail photo of cover', validators=[DataRequired()])
    user_id = IntegerField('book_id', validators=[DataRequired()])
    