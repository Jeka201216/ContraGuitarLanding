const openChatButton = document.querySelector('.question');
const chat = document.querySelector('.chat');
const questionBox = document.querySelector('.question_box');
const closeChatButton = document.querySelector('.close_chat');
const startChatButton = document.querySelector('.start_chat');
const chatRegistrationDisplay = document.querySelector('.reg_chat');
const messangerDisplay = document.querySelector('.chat_content');
const messangeInput = document.querySelector('.message_text');
const sendMessageButton = document.querySelector('.send_message');
const messages = document.querySelector('.messages');

const subForm = document.querySelector('#subscribeForm');
const subEmail = document.querySelector('#subEmail');


// const socket = io();
subForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (subEmail.value) {
      socket.emit('subscribe message', subEmail.value);
      subEmail.value = '';
    }
  });

//   socket.on('subscribe message', function(msg) {
//     // var item = document.createElement('li');
//     // item.textContent = msg;
//     // messages.appendChild(item);
//     // window.scrollTo(0, document.body.scrollHeight);
//     subEmail.value = 'OK';
//   });


openChatButton.addEventListener('click', event => {
    chat.classList.remove('hide');
    questionBox.classList.add('hide');
    messangeInput.focus();
});

closeChatButton.addEventListener('click', event => {
    chat.classList.add('hide');
    questionBox.classList.remove('hide');
});

startChatButton.addEventListener('click', event => {
    chatRegistrationDisplay.classList.add('hide');
    messangerDisplay.classList.remove('hide');
    messangeInput.focus();
});

sendMessageButton.addEventListener('click', event => {
    sendMessage();
});

messangeInput.addEventListener('keyup', event => {
    if(event.key == 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    messangeInput.value = messangeInput.value.trim();
    if(messangeInput.value.length > 0) {
        let userMessage = document.createElement("p");
        userMessage.innerHTML = messangeInput.value;
        userMessage.classList.add('user_message');
        messages.innerHTML += userMessage.outerHTML;
        messangeInput.focus();
        messages.scrollTo(0, messages.scrollHeight);
    }
    messangeInput.value = '';
}