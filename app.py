"""
Mapa Interactivo - versión full-stack
--------------------------------------
Backend (Python/Flask): lee datos.json y lo expone como una API
(/api/lugares) en formato JSON.
Frontend (HTML/CSS/JS): hace fetch("/api/lugares") y arma el menú y el
panel de información con JavaScript, sin recargar la página.

Requiere: pip install flask
Correr con: python app.py   (y entrar a http://localhost:5000)
"""

import json
from flask import Flask, jsonify

app = Flask(__name__, static_folder="static", static_url_path="")


def cargar_datos():
    with open("datos.json", "r", encoding="utf-8") as archivo:
        return json.load(archivo)


@app.route("/")
def index():
    return app.send_static_file("index.html")


@app.route("/api/lugares")
def api_lugares():
    return jsonify(cargar_datos())


if __name__ == "__main__":
    app.run(debug=True)