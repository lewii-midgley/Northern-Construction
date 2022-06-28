console.log("sup");

$("#hamburger").click(  function() {
    $("#nav-mobile").toggle();
});

const submit = document.getElementById('submit-btn');
const modal = document.getElementById('contact-modal');

submit.addEventListener('click', () => {
    modal.classList.add('show');
});





