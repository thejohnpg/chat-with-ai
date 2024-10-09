# Chat-With-AI

**Chat-With-AI** é um chatbot alimentado por IA que utiliza o modelo Gemini da Google Generative AI para fornecer respostas em português. Este projeto oferece uma interface de chat amigável e responsiva, ideal para suporte técnico e assistência.

## Funcionalidades

- **Respostas em Português**: Gera respostas em português para consultas dos usuários.
- **Interface de Chat em Tempo Real**: Permite conversas em tempo real com uma interface de usuário intuitiva.
- **Design Responsivo**: Adaptável para dispositivos móveis e desktop, garantindo uma experiência de usuário consistente.

## Pré-requisitos

- **Python 3.6+**
- **Bibliotecas Python**: Flask, google-generativeai, python-dotenv

## Instalação

- **Clone o Repositório**

   ```bash
   git clone https://github.com/thejohnpg/chat-with-ai.git
   cd chat-with-ai


- **Crie um ambiente virtual:**
python -m venv venv
source venv/bin/activate  # No Windows use `venv\Scripts\activate`

- **Instale as dependencias:**
pip install flask google-generativeai python-dotenv

- **Configure a Chave da API:**
Crie um arquivo .env na raiz do projeto e adicione sua chave da API do Gemini:

  Ex: GEMINI_API_KEY=SUA_CHAVE_API_AQUI

## **Execute a aplicação**
```bash 
    python app.py
