const input = document.querySelector('.loginInput');
const button = document.querySelector('.loginButton');
const form = document.querySelector('.loginForm');


function checkInput({target}){
    if (target.value.length > 2 ){
        button.removeAttribute('disabled');
        return; 
    }else{
        button.setAttribute('disabled', '');
    }
}

const handleSubmit = (event) => {
    event.preventDefault();
    console.log("logando...");
    localStorage.setItem('username', input.value);
    checkLogin();
}

function checkLogin(){
    let userName = localStorage.getItem('username');
    let newUser = {name: `${userName}`};
    const userNameServerResponse = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', newUser);
    userNameServerResponse.then(mainPage);
    userNameServerResponse.catch(userNameError)

    function mainPage(){
        window.location = 'pages/main.html'
    }

    function userNameError(){
        alert("Nome de usuário já utilizado.")
    }
}



input.addEventListener('input', checkInput);
form.addEventListener('submit', handleSubmit);