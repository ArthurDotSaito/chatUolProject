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
    window.location = 'pages/main.html'; 
}

input.addEventListener('input', checkInput);
form.addEventListener('submit', handleSubmit);