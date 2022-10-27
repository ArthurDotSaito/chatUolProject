let usersMessages = []

const getMessages = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
getMessages.then(hasArrived);

function hasArrived(response){
    // console.log(response);
    // console.log(response.data);

    usersMessages = response.data;
    dataMessageRender();
    backgroundColorForMessage();
}   

function dataMessageRender(){
    const messagesList = document.querySelector('.message');
    messagesList.innerHTML = '';
    for(let i = 0; i < usersMessages.length; i++){
        let userMessage = usersMessages[i];

        if(userMessage.type == 'status'){
            messagesList.innerHTML +=`
            <ul class="messageBox">
                <li class="hour">(${userMessage.time})</li>
                <li class="from">${userMessage.from}</li>
                <li class="text">${userMessage.text}</li>
            </ul>
        `             
        }else{
            messagesList.innerHTML +=`
            <ul class="messageBox">
                <li class="hour">(${userMessage.time})</li>
                <li class="from">${userMessage.from}</li>
                <li class="toUsers">para <span>${userMessage.to}:</span></li>
                <li class="text">${userMessage.text}</li>
            </ul>
        `
        }
    }
}

function backgroundColorForMessage(){
    let messagesBox = document.getElementsByClassName('messageBox');
    console.log(messagesBox);
    for(let i = 0; i < usersMessages.length; i++){
        let userMessage = usersMessages[i];
        let messageBox = messagesBox[i];

        if(userMessage.type == 'status'){
            messageBox.classList.add('statusMessage');          
        }else if(userMessage.type == 'message'){
            messageBox.classList.add('globalMessage');         
        }else{
            messageBox.classList.add('privateMessage')
        }  
    }
}
