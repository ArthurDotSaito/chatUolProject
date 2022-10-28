let userName = localStorage.getItem('username');

window.onload = () =>{
    getMessagesFromServer();
    const reloadMessages = window.setInterval(() => {getMessagesFromServer()}, 3000);
    const verifyOnlineStatus = window.setInterval(() => {isOnline()}, 5000);
}

function isOnline(){
    let localOnlineUser = {name: `${userName}`}
    const statusOnline = axios.post('https://mock-api.driven.com.br/api/v6/uol/status', localOnlineUser);
    statusOnline.then(showAsOnline);

    function showAsOnline(){
        console.log('Usuário Online');
    }
}