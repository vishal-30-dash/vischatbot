const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

const predefinedResponses = {
    "hello": "hello",
    "hi": "Hi! How can I help you today?",
    "how are you": "I'm just a bot, but I'm doing great, thank you!",
    "time": "7:00",
    "who am i": "i am bot",
    "bye": "Goodbye! Have a nice day!",
};

// Listen for the 'Enter' key press on the input field
userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();  // Prevent form submission if used in a form
        sendMessage();  // Call sendMessage when Enter is pressed
    }
});

function sendMessage() {
    const userMessage = userInput.value.trim();
    
    if (userMessage) {
        // Display user message
        displayMessage(userMessage, 'user');
        
        // Clear the input field
        userInput.value = '';
        
        // Simulate bot response
        setTimeout(() => {
            const botResponse = getBotResponse(userMessage);
            displayMessage(botResponse, 'bot');
        }, 1000);
    }
}

function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    
    // Scroll to the latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userMessage) {
    const messageLower = userMessage.toLowerCase();
    return predefinedResponses[messageLower] || "Sorry, I didn't understand that.";
}
