function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_wrbgu5n", "template_vyv4iph", parms)
    .then(function(response) {
        document.getElementById("thank-you-msg").style.display = "block";

        // Optionally clear form inputs
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";

        console.log("SUCCESS", response);
    }, function(error) {
        document.getElementById("thank-you-msg").style.display = "none";
        alert("Failed to send email. Please try again.");
        console.log("FAILED", error);
    });
}
