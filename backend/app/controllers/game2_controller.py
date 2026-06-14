from flask import jsonify
from app.services import game2_service

def init_session(data):
    company = data.get('companyName')
    role = data.get('role')
    offer = data.get('currentOffer')

    if not all([company, role, offer]):
        return jsonify({"error": "Missing required fields"}), 400

    try:
        result = game2_service.initialize_game(company, role, float(offer))
        return jsonify(result), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

def process_move(data):
    try:
        result = game2_service.calculate_move(data)
        return jsonify(result), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500