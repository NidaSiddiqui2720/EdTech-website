// Access elements
const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

// Predefined responses
const responses = {
    "hii": "Hello! How can I help you today?",
    "hello": "Hi there! How can I assist you?",
    "hlo":"Hi there! How can I assist you?",
    "how are you": "I'm good, thanks for asking! How about you?",
    "who is prime minister of india": "The Prime Minister of India is Mr. Narendra Modi.",
    "how are you?": "I'm good, thanks for asking! How about you?",
    "bye": "Goodbye! Have a great day!",
    "india":"India is a very large country",
    "calculate 2+2": "2+2 is equals to 4",
    "explain java":"Java is a high-level, object-oriented, class-based programming language that is designed to have as few implementation dependencies as possible. It was developed by James Gosling at Sun Microsystems and released in 1995. It’s now owned by Oracle.",
    "explain python":"Python is a high-level, interpreted, and general-purpose programming language created by Guido van Rossum and released in 1991. It emphasizes readability and simplicity, making it great for both beginners and professionals.",
    "for loop syntax":"for(start;condition;increment/decrement)",
    "explain newton's third law":"Whenever one object exerts a force on a second object, the second object exerts an equal force back on the first object, but in the opposite direction.",
    "give example":"Jumping off a boat:When you jump forward, you push the boat backward.Action: You push the boat.Reaction: The boat pushes you forward.",
    "default": "Sorry, I don't understand that. Can you try asking something else?"
};

// Function to handle user input and bot response
function getBotResponse(userMessage) {
    // Convert message to lowercase for case-insensitive comparison
    const lowerMessage = userMessage.toLowerCase();

    // Respond based on predefined responses or default message
    return responses[lowerMessage] || responses["default"];
}

// Function to display chat message
function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the latest message
}

// Handle Send Button click
sendButton.addEventListener('click', function() {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        displayMessage(userMessage, 'user');
        const botResponse = getBotResponse(userMessage);
        displayMessage(botResponse, 'bot');
        userInput.value = '';  // Clear input field
    }
});

// Handle Enter key press for sending messages
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});