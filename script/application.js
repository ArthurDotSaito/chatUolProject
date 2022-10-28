getMessagesFromServer();
const reloadMessages = window.setInterval(() => {getMessagesFromServer()}, 3000); //atualizar e pegar novo array original, sem alterar a copia
verifyChangestoScroll();