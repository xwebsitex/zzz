document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(Name: ${name}, Email: ${email}, Message: ${message});
    alert('Thank you for your message!');
    this.reset();
});
