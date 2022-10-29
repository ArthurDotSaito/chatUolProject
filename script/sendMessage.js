let inputMessage = document.querySelector('.inputMessage');

function sendMessagesToServer(){
    console.log("Sua mensagem foi enviada!");
    console.log(inputMessage);
    let messageParameters = {from: userName,to: "Todos",text: inputMessage.value ,type: "message"}
    console.log(messageParameters);
    //sendMessageAttributes
    const sendMessageAttributes = axios.post('https://mock-api.driven.com.br/api/v6/uol/messages', messageParameters);
    sendMessageAttributes.then(getMessagesFromServer);
    sendMessageAttributes.catch(errorSendingMessage);
}

function errorSendingMessage(error) {
    console.log(error);
    
    if ( error.response.status === 422){
        alert(error.response.data.detalhes[0]+', '+error.response.data.detalhes[1]);
    }else if ( error.response.status === 404) {
        alert("O recurso não foi encontrada no servidor");
    }else{
        alert("ocorreu um erro!");
    }
}
