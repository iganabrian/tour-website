const buttonElement = document.querySelector('.js-subscribe-button');

buttonElement.onclick = () =>{
    if (buttonElement.innerHTML === 'Subscribe') {
        buttonElement.innerHTML = 'Unsubscribe';
        
    } else {
        buttonElement.innerHTML = 'Subscribe';
    }
}

