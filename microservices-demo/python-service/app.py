from flask import Flask, jsonify

app = Flask(__name__)

@app.get("/")
def home():
    return jsonify({
        "service": "python-service",
        "message": "Hello from Flask"
    })

@app.get("/health")
def health():
    return jsonify({
        "status": "ok"
    })