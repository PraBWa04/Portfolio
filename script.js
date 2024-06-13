document.querySelector(".contact-me").addEventListener("click", () => {
  document.querySelector("#contacts").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".benefit-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "scale(1.05)";
  });
  item.addEventListener("mouseleave", () => {
    item.style.transform = "scale(1)";
  });
});

function updateLearningDuration() {
  const startDate = new Date("2023-10-01");
  const currentDate = new Date();
  const differenceInTime = currentDate.getTime() - startDate.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
  const months = Math.floor(differenceInDays / 30);
  const days = differenceInDays % 30;

  document.querySelector(
    ".learning-duration"
  ).textContent = `Started learning frontend development: ${months} months and ${days} days ago.`;
}

document.addEventListener("DOMContentLoaded", updateLearningDuration);

document.querySelector("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("https://formspree.io/f/xleqkblj", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      message: document.querySelector("#message").value,
    }),
  })
    .then((response) => {
      if (response.ok) {
        alert("Thank you for your message! I will get back to you soon.");
        document.querySelector("#contact-form").reset();
      } else {
        alert("There was a problem with your submission. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("There was a problem with your submission. Please try again.");
    });
});

document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    link.blur();
  });
});
