// VARIABLES

const accordion = document.getElementsByClassName('content-container');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');  
    }) 
}















