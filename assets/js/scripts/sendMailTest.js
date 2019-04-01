sendMail = function(message) {
    if(message == "SUCCESS") {
        return "Your message has been sent successfully";
    }
    else if(message == "FAILED") {
        return "Message was not sent";
    }
};