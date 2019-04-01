function sendMail(form) {
    emailjs.send("milestone2", "milestone2", {
        "from_name": form.name.value,
        "from_email": form.emailaddress.value,
        "project_request": form.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Your message has been sent successfully");
            document.getElementById('form').reset();
        },
        function(error) {
            console.log("FAILED", error);
            alert("Message was not sent");
            document.getElementById('form').reset();
        }
    );
    return false;  // To block from loading a new page
}
