document.getElementById('contact-form').addEventListener('submit', function(event) {  
    event.preventDefault(); // Prevent form submission  
    const name = document.getElementById('name').value;  
    const email = document.getElementById('email').value;  
    const message = document.getElementById('message').value;  

    console.log("Name:", name);  
    console.log("Email:", email);  
    console.log("Message:", message);  

    // Feedback to the user  
    alert('Thank you for your message! We will get back to you soon.'); // Placeholder for actual implementation  
});  