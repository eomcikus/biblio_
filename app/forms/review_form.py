from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class ReviewForm(FlaskForm):
    review = StringField('Review text', validators=[DataRequired()])
    stars = IntegerField('Stars', validators=[DataRequired()])
    book_id = IntegerField('book_id', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])