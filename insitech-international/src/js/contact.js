// Initialize EmailJS with your user ID
emailjs.init("7UIlAS8sUR19PKuHJ");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Disable the submit button to prevent multiple submissions
      const submitButton = form.querySelector('button[type="submit"]');
      submitButton.disabled = true;

      // Send the email using EmailJS
      emailjs
        .sendForm("service_arl4maw", "template_vztb68i", this)
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            showModal("Your message has been sent successfully!");
            form.reset();
          },
          function (error) {
            console.error("FAILED...", error);
            showModal("Oops! Something went wrong. Please try again.");
          }
        )
        .finally(function () {
          // Re-enable the submit button
          submitButton.disabled = false;
        });
    });
  }
});

function showModal(message) {
  const modalMessage = document.getElementById("modalMessage");
  modalMessage.textContent = message;
  $("#responseModal").modal("show");
}
