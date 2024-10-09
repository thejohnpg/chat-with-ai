document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');

    if (userInput.trim() === "") return;

    // Adicionar a mensagem do usuário ao chat
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    // Enviar a mensagem para o servidor
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: userInput })
    })
    .then(response => response.json())
    .then(data => {
        // Adicionar a resposta da IA ao chat com formatação HTML
        const botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.innerHTML = formatResponse(data.response);
        chatBox.appendChild(botMessage);

        // Rolagem automática para a última mensagem
        chatBox.scrollTop = chatBox.scrollHeight;
    });

    // Limpar o campo de entrada
    document.getElementById('user-input').value = '';
}

function formatResponse(response) {
    // Adicionar quebras de linha e formatação HTML
    return response
        .replace(/\n/g, '<br>')
        .replace(/\* \*\*(.*?)\*\*:/g, '<br><strong>$1:</strong>')
        .replace(/\* (.*?)\n/g, '<br>• $1<br>');
}
