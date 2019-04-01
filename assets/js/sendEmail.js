function sendMail(contactForm) {
    emailjs.send("milestone2", "milestone2", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Your message has been sent successfully");
            
        },
        function(error) {
            console.log("FAILED", error);
            alert("Message was not sent");
            
        }
    );
    return false;  // To block from loading a new page
}