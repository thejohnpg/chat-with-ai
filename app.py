from flask import Flask, request, jsonify, render_template
import google.generativeai as genai
import os
from dotenv import load_dotenv

app = Flask(__name__)
load_dotenv()

# Configurar a chave da API do Gemini
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    model = genai.GenerativeModel(model_name="gemini-1.5-flash-latest")
    prompt = f"Responda em português: {data['text']}"
    response = model.generate_content(prompt)
    message = response.text.strip()
    return jsonify({'response': message})

if __name__ == '__main__':
    app.run(debug=True)
