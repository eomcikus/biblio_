from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class Shelf_Form():
    name = StringField('Name of Shelf', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])