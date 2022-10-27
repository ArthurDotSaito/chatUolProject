let usersMessages = []

const getMessages = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
getMessages.then(hasArrived);

function hasArrived(response){
    console.log(response);
    console.log(response.data);

    usersMessages = response.data;
    dataMessageRender();
}   

function dataMessageRender(){
    const messagesList = document.querySelector('.message');
    messagesList.innerHTML = '';
    for(let i = 0; i < usersMessages.length; i++){
        let userMessage = usersMessages[i];
        messagesList.innerHTML +=`
            <ul>
                <li class="hour">${userMessage.time}</li>
                <li class="from">${userMessage.from}</li>
                <li class="toUsers">para <span>${userMessage.to}:</span></li>
                <li class="text">${userMessage.text}</li>
            </ul>
        `
    }
}

