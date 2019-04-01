describe("sendMail function", function() {

    beforeEach(function() {
        sendmail = new sendMail();
    });

    describe("sendMail tests", function() {
        it("should exist", function() {
            expect(sendMail).toBeDefined();
        });
    });

    it("should return Your message has been sent successfully", function() {
        var result = sendMail("SUCCESS");
        expect(result).toBe("Your message has been sent successfully");
    });
    it("should return Message was not sent", function() {
        var result = sendMail("FAILED");
        expect(result).toBe("Message was not sent");
    });
    
});