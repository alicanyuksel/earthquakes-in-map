from flask import Flask, render_template
from flask_restful import Api
import requests

# intern package
from db import db
from config import db_name, url_api_backend
from resources.earthquake import Earthquake, EarthquakesList


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{db_name}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
api = Api(app)


@app.before_first_request
def create_tables():
    db.create_all()


api.add_resource(Earthquake, "/earthquake/<int:id_>")
api.add_resource(EarthquakesList, "/earthquakes")


@app.route("/")
def index():
    data = requests.get(url_api_backend).json()
    return render_template("index.html", data=data)


if __name__ == "__main__":
    db.init_app(app)
    app.run(port=5000, debug=True)
