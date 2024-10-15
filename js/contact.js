// Initialize EmailJS with your user ID
emailjs.init("7UIlAS8sUR19PKuHJ"); // Replace with your EmailJS user ID

// Add an event listener for the form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Send the email using EmailJS
      emailjs.sendForm("service_arl4maw", "template_vztb68i", this).then(
        function () {
          alert("Your message has been sent!");
          form.reset(); // Reset the form
        },
        function (error) {
          alert("Oops! Something went wrong. Please try again.");
          console.error("Failed to send email: ", error);
        }
      );
    });
  }
});
