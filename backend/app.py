from flask import Flask, jsonify, request
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)  

events = [
    {
        "id": 1,
        "name": "Carnaval Recife",
        "description": "Um evento cultural inesquecível!",
        "start_date": "2024-02-10",
        "end_date": "2024-02-14",
    },
    {
        "id": 2,
        "name": "Festival de Jazz",
        "description": "Melhores músicos de Jazz.",
        "start_date": "2024-06-05",
        "end_date": "2024-06-07",
    },
]
 
@app.route("/events", methods=["GET"])
def get_events():
    return jsonify(events)
 
@app.route("/events", methods=["POST"])
def add_event():
    data = request.json
    new_event = {
        "id": len(events) + 1,
        "name": data.get("name"),
        "description": data.get("description"),
        "start_date": data.get("start_date"),
        "end_date": data.get("end_date"),
    }
    events.append(new_event)
    return jsonify(new_event), 201

if __name__ == "__main__":
    app.run(debug=True)