document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".member-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate rotation based on mouse position
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate rotation angles (max 10 degrees)
      const rotateY = ((x - centerX) / centerX) * 10;
      const rotateX = ((centerY - y) / centerY) * 10;

      // Apply the transform
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;

      // Add a subtle shadow effect
      const intensity =
        Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)) /
        Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
      card.style.boxShadow = `0 ${10 + intensity * 10}px ${
        20 + intensity * 20
      }px rgba(0, 0, 0, 0.2)`;
    });

    card.addEventListener("mouseleave", () => {
      // Reset the transform when mouse leaves
      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
      card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
    });
  });
});
