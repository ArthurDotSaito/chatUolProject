let inputMessage = document.querySelector('.inputMessage');

function sendMessagesToServer(){
    console.log("Sua mensagem foi enviada!");
    console.log(inputMessage);
    let messageParameters = {from: userName,to:" Todos",text: inputMessage.value ,type: "message"}

    const sendMessageAttributes = axios.post('https://mock-api.driven.com.br/api/v6/uol/messages', messageParameters);
    sendMessageAttributes.then(getMessagesFromServer);
    sendMessageAttributes.catch(errorDisconnected);
    inputMessage.value = '';
}

inputMessage.addEventListener('keydown', function(event){
    if(event.keyCode == 13){
        sendMessagesToServer();
    } 
})